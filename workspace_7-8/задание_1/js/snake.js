"use strict";

let snake = {
    body: null,
    direction: null,
    lastStepDirection: null,

    init(startPoint, direction) {
        this.body = [startPoint];
        this.direction = direction;
    },

    makeStep() {
        //Откуда стартуем
        //[{x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        //[{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}]

        // [{x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}]

        this.lastStepDirection = this.direction;
        this.body.unshift(this.getNextStepHeadPoint());
        this.body.pop();
    },

    getNextStepHeadPoint() {
        let firstPoint = this.body[0];

        switch (this.direction) {
            case 'up':
                return {x: firstPoint.x, y: firstPoint.y - 1};
            case 'down':
                return {x: firstPoint.x, y: firstPoint.y + 1};
            case 'right':
                return {x: firstPoint.x + 1, y: firstPoint.y};
            case 'left' :
                return {x: firstPoint.x - 1, y: firstPoint.y};
        }
    },

    isBodyPoint(point) {
        return this.body.some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },

    setDirection(direction) {
        this.direction = direction;
    },

    incrementBody() {
        let lastBodyIdx = this.body.length - 1;
        let lastBodyPoint = this.body[lastBodyIdx];
        let lastBodyPointClone = Object.assign({}, lastBodyPoint);
        this.body.push(lastBodyPointClone);
    }
};

/*
let food = {
    x: null,
    y: null,

    setFoodCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    getFoodCoordinates() {
        return {
            x: this.x,
            y: this.y
        }
    },

    isFoodPoint(point) {
        return this.x === point.x && this.y === point.y;
    }
};
*/

function foodModule() {
   let x = null;
   let y = null;

   function setFoodCoordinates(point) {
      x = point.x;
      y = point.y;
   }

   function getFoodCoordinates() {
      return {
         x: x,
         y: y
      }
   }
   
   function isFoodPoint(point) {
      return x === point.x && y === point.y;
   }

   return {
      setFoodCoordinates: setFoodCoordinates,
      getFoodCoordinates: getFoodCoordinates,
      isFoodPoint: isFoodPoint
   };
}


let renderer = {
    cells: {},
    renderMap(rowsCount, colsCount) {
        let table = document.getElementById('game');
        table.innerHTML = '';

        for (let row = 0; row < rowsCount; row++) {
            let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                let td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);
                this.cells[`x${col}_y${row}`] = td;
            }
        }
    },

    render(snakePointArray, foodPoint) {
        for (let key of Object.getOwnPropertyNames(this.cells)) {
            this.cells[key].className = 'cell';
        }

        snakePointArray.forEach((point, idx) => {
            this.cells[`x${point.x}_y${point.y}`].classList.add(idx === 0 ? 'snakeHead' : 'snakeBody');
        });

        this.cells[`x${foodPoint.x}_y${foodPoint.y}`].classList.add('food');
    }

    
};

/*
let status = {
    condition: null,

    setPlaying() {
        this.condition = 'playing';
    },

    setStopped() {
        this.condition = 'stopped';
    },

    setFinished() {
        this.condition = 'finished';
    },

    isPlaying() {
        return this.condition === 'playing';
    },

    isStopped() {
        return this.condition === 'stopped';
    }
};
*/

function statusModule() {
   let condition = null;

   function setPlaying() {
      condition = 'playing';
   }

   function setStopped() {
      condition = 'stopped';
   }

   function setFinished() {
      condition = 'finished';
   }

   function isPlaying() {
      return condition === 'playing';
   }
   
   function isStopped() {
      return condition === 'stopped';
   }
   
   return {
      setPlaying: setPlaying,
      setStopped: setStopped,
      setFinished: setFinished,
      isPlaying: isPlaying,
      isStopped: isStopped
   };
}

let settings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 2,
    winLength: 10,

    validate() {
        if (this.rowsCount < 10 || this.rowsCount > 30) {
            console.error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
            return false;
        }

        if (this.colsCount < 10 || this.colsCount > 30) {
            console.error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
            return false;
        }

        if (this.speed < 1 || this.speed > 10) {
            console.error('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
            return false;
        }

        if (this.winLength < 5 || this.winLength > 50) {
            console.error('Неверные настройки, значение winLength должно быть в диапазоне [5, 50].');
            return false;
        }

        return true;
    },
};

let scoreCounter = {
    count: 0,
    countElement: null,

    init() {
       this.countElement = document.getElementById("game_counter");
    },

    increment() {
       this.count++;
       this.render();
    },

    render() {
       this.countElement.innerHTML = this.count;
    },

    finishRender() {
       this.countElement.innerHTML = "Ура!";
    },

    clear() {
       this.count = 0;
       this.render();
    }
};

let game = {
    settings,
    status: statusModule(),
    renderer,
    food: foodModule(),
    snake,
    scoreCounter,
    tickInterval: null,

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);

        if (!this.settings.validate()) {
            return;
        }

        this.scoreCounter.init();

        this.renderer.renderMap(this.settings.rowsCount, this.settings.colsCount);

        this.setEventHandlers();

        this.reset();
    },

    setEventHandlers() {
        document.getElementById('playButton').addEventListener('click', () => this.playClickHandler());
        document.getElementById('newGameButton').addEventListener('click', () => this.newGameClickHandler());
        document.addEventListener('keydown', () => this.keyDownHandler(event));
    },

    playClickHandler() {
        if(this.status.isPlaying()) {
            this.stop();
        } else {
            this.play();
        }
    },

    newGameClickHandler() {
        this.reset();
    },

    keyDownHandler(event) {
        if(!this.status.isPlaying()) {
            return;
        }

        let direction = this.getDirectionByCode(event.code);
        if (this.canSetDirection(direction)) {
            this.snake.setDirection(direction);
        }
    },

    canSetDirection(direction) {
        return direction === 'up' && this.snake.lastStepDirection !== 'down' ||
            direction === 'right' && this.snake.lastStepDirection !== 'left' ||
            direction === 'down' && this.snake.lastStepDirection !== 'up' ||
            direction === 'left' && this.snake.lastStepDirection !== 'right';
    },

    getDirectionByCode(code) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                return 'up';
            case 'KeyD':
            case 'ArrowRight':
                return 'right';
            case 'KeyS':
            case 'ArrowDown':
                return 'down';
            case 'KeyA':
            case 'ArrowLeft':
                return 'left';
            default:
                return '';
        }
    },

    reset() {
        this.snake.init(this.getStartSnakePoint(), 'up');

        this.scoreCounter.clear();

        this.food.setFoodCoordinates(this.getRandomCoordinates());

        this.renderer.render(this.snake.body, this.food.getFoodCoordinates());
    },

    play() {
        this.status.setPlaying();

        this.tickInterval = setInterval(() => this.tickHandler(), 1000/this.settings.speed);

        this.changePlayButton('Стоп');
    },

    tickHandler() {
        if (!this.canSnakeMakeStep()) {
            this.finish();
            return;
        }

        if(this.food.isFoodPoint(this.snake.getNextStepHeadPoint())) {
            this.snake.incrementBody();
            this.scoreCounter.increment();
            this.food.setFoodCoordinates(this.getRandomCoordinates());
            if(this.isGameWon()) {
                this.finish()
            }
        }

        this.snake.makeStep();
        this.renderer.render(this.snake.body, this.food.getFoodCoordinates());
    },

    isGameWon() {
        return this.snake.body.length > this.settings.winLength;
    },

    stop() {
        this.status.setStopped();
        clearInterval(this.tickInterval);
        this.changePlayButton('Старт');
    },

    finish() {
        this.status.setFinished();
        clearInterval(this.tickInterval);
        this.changePlayButton('Игра закончена', true);
        this.scoreCounter.finishRender(); 
    },

    getStartSnakePoint() {
        return {
            x: Math.floor(this.settings.colsCount / 2),
            y: Math.floor(this.settings.rowsCount / 2)
        }
    },

    getRandomCoordinates() {
        let exclude = [this.food.getFoodCoordinates(), ...this.snake.body];

        while(true) {
            let rndPoint = {
                x: Math.floor(Math.random() * this.settings.colsCount),
                y: Math.floor(Math.random() * this.settings.rowsCount),
            };

            let excludeContainsRndPoint = exclude.some(function (exPoint) {
                return rndPoint.x === exPoint.x && rndPoint.y === exPoint.y;
            });

            if(!excludeContainsRndPoint) {
                return rndPoint;
            }
        }
    },

    changePlayButton(textContent, isDisabled = false) {
        let playButton = document.getElementById('playButton');
        playButton.textContent = textContent;
        isDisabled ? playButton.classList.add('disabled') : playButton.classList.remove('disabled');
    },

    canSnakeMakeStep() {
        let nextHeadPoint = this.snake.getNextStepHeadPoint();

        return !this.snake.isBodyPoint(nextHeadPoint) &&
            nextHeadPoint.x < this.settings.colsCount &&
            nextHeadPoint.y < this.settings.rowsCount &&
            nextHeadPoint.x >= 0 &&
            nextHeadPoint.y >= 0;
    }
};

window.onload = function () {
    game.init({speed: 2, winLength: 5});
};
