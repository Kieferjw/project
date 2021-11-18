let button = document.getElementById('button1');
let p = document.getElementById('hiddenp1');
let img = document.getElementById('hiddenimg');
let how = document.getElementById('how')

// hiding the elements initially until the button is pressed.

p.hidden = true;
img.hidden = true;
how.hidden = true;

// when you click the button element it unhides the p and img

button.onclick = function() {
    p.hidden = false;
    img.hidden = false;
    how.hidden = false;
};

