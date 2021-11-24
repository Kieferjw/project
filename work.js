let button = document.getElementById('hiddenb');
let p = document.getElementById('hiddenp')
let img = document.getElementById('patrick')

p.hidden = true;
img.hidden = true;

button.onclick = function () {
    p.hidden = false;
    img.hidden = false;
}