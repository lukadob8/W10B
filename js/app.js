function choiceOne() {
    Cookies.set('choice', 'Movies', {expires: 1});
    window.open("selection.html");

}


function choiceTwo() {
    Cookies.set('choice', 'Music', {expires: 1});
    window.open("selection.html");
}


function choiceThree() {
    Cookies.set('choice', 'Books', {expires: 1});
    window.open("selection.html");
}