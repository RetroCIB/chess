class Game {

    defaultTable = [
        ['Tw', 'Hw', 'Bw', 'Qw', 'Kw', 'Bw', 'Hw', 'Tw'],
        ['Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw', 'Pw'],

        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],

        ['Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb', 'Pb'],
        ['Tb', 'Hb', 'Bb', 'Qb', 'Kb', 'Bb', 'Hb', 'Tb'],

    ];
    table = null;
    moves = [];


    constructor() {
        this.moves = [];
        this.table = this.defaultTable;
    }

    drawTable() {
        const table_el = document.querySelector('main #game #game_table');
        table_el.innerHTML = "";
        // 
        for (let row = 8; row >= 1; row--) {

            let white_start_cell = row % 2;

            for (let col = 1; col <= 8; col++) {
                const cell_el = document.createElement('div');

                cell_el.classList.add('cell');
                cell_el.classList.add('cell_x' + row + '_y' + col);
                cell_el.classList.add('cell_color_' + (((white_start_cell + col) % 2) ? 'white' : 'black'));

                cell_el.setAttribute('cell-row', row);
                cell_el.setAttribute('cell-column', col);

                table_el.appendChild(cell_el);
            }
        }
        // trasare numere
        for (let row = 8; row >= 1; row--) {
            const cell_el = document.createElement('div');
            cell_el.classList.add('cell-number');
            cell_el.style.top = `calc( 100% - ((100% / 8) * ${row}) + (var(--cell-size) / 4 * 1.7) )`;
            cell_el.style.left = `-3rem`;
            cell_el.innerHTML = row;

            table_el.appendChild(cell_el);
        }
        // trasare litere
        for (let col = 1; col <= 8; col++) {
            const cell_el = document.createElement('div');
            cell_el.classList.add('cell-letter');
            cell_el.style.left = `calc( ((100% / 8) * ${col - 1}) + (var(--cell-size) / 4 * 1.7) )`;
            cell_el.style.bottom = `-3rem`;
            cell_el.innerHTML = String.fromCharCode(('A').charCodeAt(0) + col - 1);

            table_el.appendChild(cell_el);
        }
    }

    drawContent() {
        for (let row = 8; row >= 1; row--) {
            for (let col = 1; col <= 8; col++) {

                const cell_el = document.querySelector(`main #game #game_table .cell.cell_x${row}_y${col}`);

                let cell_value = this.table[row - 1][col - 1];

                let piece_value = null;
                let piece_color = null;

                if (cell_value) {
                    piece_value = (cell_value.split('')[0]).toUpperCase();
                    piece_color = (cell_value.split('')[1]).toLowerCase();

                    let piece_img = '';

                    switch (piece_color) {
                        case 'b':
                            piece_img = 'Black'
                            break;
                        case 'w':
                            piece_img = 'White'
                            break;
                    }


                    switch (piece_value) {
                        case 'P':
                            piece_img += 'Pawn'
                            break;
                        case 'T':
                            piece_img += 'Rook'
                            break;
                        case 'H':
                            piece_img += 'Knight'
                            break;
                        case 'B':
                            piece_img += 'Bishop'
                            break;
                        case 'Q':
                            piece_img += 'Queen'
                            break;
                        case 'K':
                            piece_img += 'King'
                            break;
                    }

                    piece_img += '.png';

                    let piece = document.createElement('img');
                    piece.setAttribute('src', 'img/' + piece_img);

                    cell_el.appendChild(piece);

                } 

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
        game.drawContent();
    }
}