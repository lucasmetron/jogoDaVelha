document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

   

    function handleClick(event) {

        let square = event.target;
        let position = square.id;
        let win = () =>{
            if (playerTime == 1){
                playerTime = "X";

            } else {
                playerTime = "O"
            }

            return playerTime;
        }

        if (handleMove(position) == true){
            updateSquares();
            
            setTimeout(()=>{
                alert("O jogo acabou! O jogador '"+win()+"' é o vencedor")
            },100)

            
        } ;
        updateSquares();
        

    }

    function updateSquares() {

        let squares = document.querySelectorAll(".square");

        squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position]

            if (symbol != "") {
                square.innerHTML = `<div class='${symbol}'> </div>`
            }
        })


    }

});

