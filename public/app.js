const buttons = {
    dark: document.getElementById('dark'),
    light: document.getElementById('light'),
    greenify: document.getElementById('greenify')
}
const body = document.body;
const cacheData = {
    theme: localStorage.getItem('theme'),
    isGreen: localStorage.getItem('isGreen')
}

if(cacheData.theme){
    body.classList.add(cacheData.theme)
}
if(cacheData.isGreen){
    body.classList.add('greenify')
}

buttons.dark.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}

buttons.light.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}

buttons.greenify.onclick = () => {
    let isGreen = body.classList.contains('greenify');
    if(isGreen){
        body.classList.remove('greenify')
    }
    else {
        body.classList.add('greenify');
    }
    localStorage.setItem('isGreen', isGreen);
}

