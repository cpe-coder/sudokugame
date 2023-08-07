document.querySelector('#dark-mode-toggle').addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDark);

    document.querySelector('meta[name="theme-color"').setAttribute('content', isDark ? '22222c': '#fff');
})

const getGameInfo = () =>  JSON.parse(localStorage.getItem('game'));


const init = () =>{
    const darkmode = JSON.parse(localStorage.getItem('darkmode'));
    document.body.classList.add(darkmode? 'dark': 'light');
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDark ? '22222c': '#fff');

    const game =  getGameInfo();    

    document.querySelector('#btn-continue').style.display = game ? 'grid' : 'none'; 
}

init();