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
        // trasare numere
        for(let row=8; row>=1; row--){ 
                const cell_el = document.createElement('div');
                cell_el.classList.add('cell-number');
                cell_el.style.top = `calc( 100% - ((100% / 8) * ${row}) + (var(--cell-size) / 4 * 1.7) )`;
                cell_el.style.left = `-3rem`;
                cell_el.innerHTML = row;

                table_el.appendChild(cell_el); 
        } 
        // trasare litere
        for(let col =1; col <=8; col++){ 
                const cell_el = document.createElement('div');
                cell_el.classList.add('cell-letter');
                cell_el.style.left = `calc( ((100% / 8) * ${col-1}) + (var(--cell-size) / 4 * 1.7) )`;
                cell_el.style.bottom = `-3rem`;
                cell_el.innerHTML =String.fromCharCode( ('A').charCodeAt(0)   + col - 1 );

                table_el.appendChild(cell_el); 
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