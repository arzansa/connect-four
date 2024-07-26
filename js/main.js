/*-------------- Constants -------------*/
const COLORS = {
    '1': 'purple',
    '-1': 'orange',
    'null': 'white'
}

/*---------- state variables ---------*/
let board;
let turn;
let winner;

/*----- Cached Elements  -----*/
const msgEl = document.querySelector('h1');


/*-------------- Functions -------------*/
init();

// Initialize all state, then call render()
function init() {
    board = [
        [null, null, null, null, null, null],    // column 0
        [null, null, null, null, null, null],    // column 1
        [null, null, null, null, null, null],    // column 2
        [null, null, null, null, null, null],    // column 3
        [null, null, null, null, null, null],    // column 4
        [null, null, null, null, null, null],    // column 5
        [null, null, null, null, null, null],    // column 6
    ];
    turn = 1;
    winner = null;
    render();
}

// Visualize all state and other info (like messaging) in the DOM
function render() {
    renderBoard();
    renderMessage();
}

function renderMessage() {
    if (winner === null) {
        // Game is in progress
        msgEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s turn`;
    } else if (winner === 'Tie') {
        msgEl.textContent = "It's a Tie!!!";
    } else {
        // We have a winner!
        msgEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    }
}


function renderBoard() {
    // board.foreEach(function(colArr, colIdx) {}); <- also works
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = COLORS[cellVal];

        });
    });
}



/*----------- Event Listeners ----------*/