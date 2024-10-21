board = [['0','1','2'],['3','4','5'],['6','7','8']];
current_player = 'X';

function place(button)
{
    document.getElementById(button).innerText = current_player;
    board[button[0]][button[1]] = current_player;
    document.getElementById(button).disabled = true;
    
    checkWin();
    if(current_player === 'X') 
        current_player = 'O';
    else
        current_player = 'X';
    
    document.getElementById('turn').innerText = current_player + "'s Turn";
    console.log(board[0],board[1],board[2]);
}

function checkWin()
{
    for(i=0; i<=2;i++)
    {
        if((board[i][0] === board[i][1]) && 
        (board[i][1] === board[i][2]))
        {
            win();
            return;
        }

        if((board[0][i] === board[1][i]) && 
        (board[1][i] === board[2][i]))
        {
            win();
            return;
        }
    }

    if((board[0][0] === board[1][1]) && 
       (board[1][1] === board[2][2]))
    {
        win();
        return;
    }

    if((board[2][0] === board[1][1]) && 
       (board[1][1] === board[0][2]))
    {
        win();
        return;
    }
}

function win()
{
    for(i=0;i<=2;i+=1)
    {
        for(j=0;j<=2;j+=1)
        {
            document.getElementById(String(i) + String(j)).disabled = true;
        }
    }
    document.getElementById('winner').innerText = current_player + " Won!";
}