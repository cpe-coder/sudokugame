document.querySelector('#dark-mode-toggle').addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDark);

    document.querySelector('meta[name="theme-color"').setAttribute('content', isDark ? '22222c': '#fff');
})

const start_screen = document.querySelector('#start-screen');
const game_screen = document.querySelector('#game-screen');
const pause_screen = document.querySelector('#pause-screen');
const result_screen = document.querySelector('#result-screen')
const cells = document.querySelector('#main-grid-cell');
const name_input = document.querySelector('#input-name');
const number_inputs = document.querySelector('.number');
const player_name = document.querySelector('#player-name');
const game_level = document.querySelector('#game-level');
const game_time = document.querySelector('#result-time');

const getGameInfo = () =>  JSON.parse(localStorage.getItem('game'));


const initGameGrid = () =>{
    let index = 0;

    for (let i = 0; i < Math.pow(level.GRID_SIZE,2); i++){
        let row = Math.floor(i/level.GRID_SIZE);
        let col = i % level.GRID_SIZE;
        if (row === 2 || row === 5) cells[index].style.marginBottom = '10px';
        if (col === 2 || col === 5) cells[index].style.marginRight = '10px';

        index++;
    }
}

const init = () =>{
    const darkmode = JSON.parse(localStorage.getItem('darkmode'));
    document.body.classList.add(darkmode? 'dark': 'light');
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDark ? '22222c': '#fff');

    const game =  getGameInfo();    

    document.querySelector('#btn-continue').style.display = game ? 'grid' : 'none'; 
}