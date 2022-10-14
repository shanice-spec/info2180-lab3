window.onload= function(){
    const game = document.getElementById("game");
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const controls= document.getElementsByClassName("controls");
    const button = document.getElementsByClassName("btn")[0];

    const ele = board.querySelectorAll('div');
    let play='X';
    let poslst = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for(let a=0; a<=8; a++){
        ele[a].setAttribute("class","square");

        
    }
    ele.forEach( (elem, index) => {
        elem.addEventListener('click', () => userAction(elem, index));
        elem.addEventListener('mouseover', function(){
            elem.classList.add('hover');
        });
        elem.addEventListener('mouseout', function(){
            elem.classList.remove('hover');
        });
    });

    function checkWin(){
        for(let i=0; i<=7; i++){
            const win = winningConditions[i];
 
            const pos1= poslst[win[0]];
            const pos2 = poslst[win[1]];
            const pos3 = poslst[win[2]];
            if (pos1 === ''|| pos2 === ''|| pos3===''){
                continue;
            }  
            if (pos1=== pos2 && pos2 === pos3){
                status.innerHTML= 'Congratulations!' + pos1 +' is the winner';
                status.classList.add('you-won');
                break;
            }     
        }
    }
    const userAction= (elem,index) =>{
        console.log(elem.innerText)
        if(elem.innerText !== 'X' || elemm.innerText !== 'O'){
            elem.innerText= play;
            elem.classList.add(play);
            poslst[index]=play;
            console.log(poslst);
            checkWin();
            if(play === 'X'){
                play='O';

            }else{
                play='X';
            }
        }

    }

    button.addEventListener('click', ()=>{
        poslst=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won');
        ele.forEach(elem =>{
            elem.innerText ='';
            elem.classList.remove('X');
            elem.classList.remove('O');
        });
    });
}

