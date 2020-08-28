var option = document.getElementById('fav');

option.innerHTML = Cookies.get('choice');


function reset() {
    Cookies.remove('choice');
    window.open('index.html');
}