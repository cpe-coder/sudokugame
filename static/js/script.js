document.querySelector('#dark-mode-toggle').addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkmode', isDark);

    document.querySelector('meta[name="theme-color"').setAttribute('content', isDark ? '22222c': '#fff');
})

const init = () =>{
    const darkmode = JSON.parse(localStorage.getItem('darkmode'));
    document.body.classList.add(darkmode? 'dark': '');
    document.querySelector('meta[name="theme-color"').setAttribute('content', isDark ? '22222c': '#fff');

}