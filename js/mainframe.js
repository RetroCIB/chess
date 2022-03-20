class Game {
    constructor() { }

    drawTable() {
        const table_el = document.querySelector('main #game #game_table');
        table_el.innerHTML = "";
        // 
        for(let row=8; row>=1; row--){

            let white_start_cell = row % 2;  

            for(let col=1; col<=8; col++){  
                const cell_el = document.createElement('div');

                cell_el.classList.add('cell');
                cell_el.classList.add('cell_x' + row + '_y' + col); 
                cell_el.classList.add('cell_color_' + (((white_start_cell + col) % 2) ? 'white' : 'black') );

                cell_el.setAttribute('cell-row', row);
                cell_el.setAttribute('cell-column', col);

                table_el.appendChild(cell_el);
            }
        }
    }
}




export const MainFrame = {
    showStartNewContainer: function () {
        const start_new_container = document.querySelector('main #start_new');
        start_new_container.classList.add('active');
        console.log('AICI');
    },
    hideStartNewContainer: function () {
        const start_new_container = document.querySelector('main #start_new');
        start_new_container.classList.remove('active');
    },

    showGameContainer: function () {
        const game_container = document.querySelector('main #game');
        game_container.classList.add('active');
    },
    hideGameContainer: function () {
        const game_container = document.querySelector('main #game');
        game_container.classList.remove('active');
    },



    initializeGame: function () {
        const game = new Game();
        game.drawTable();
    }
}