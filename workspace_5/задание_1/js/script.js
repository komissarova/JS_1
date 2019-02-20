function chessBoard() {
    let table = document.createElement('table');
    let blackOrWhite = true;
    
    let tr = document.createElement('tr');
    let arr = [' ','a','b','c','d','e','f','g','h'];
    
    for(let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        let tdForNumber = document.createElement('td');
        tdForNumber.style.width='50px';
        tdForNumber.style.height='50px';
        tdForNumber.innerHTML=8-i;
        tr.appendChild(tdForNumber);
        
          for(let j = 0; j < 8; j++) {
            if(j == 0)
                blackOrWhite =! blackOrWhite; 
            let td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '50px';
            if(blackOrWhite) {
                td.style.background = 'black';    
            } else 
                td.style.background = 'white';       
                tr.appendChild(td);
                blackOrWhite =! blackOrWhite;
            }

        table.appendChild(tr);
    }
     
    for(let k = 0; k < 9; k++) { 
        let td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.background = 'white';
        td.innerHTML = arr[k];  
        tr.appendChild(td);     
    }

    table.appendChild(tr);
    document.body.appendChild(table);
}
 
chessBoard();

    