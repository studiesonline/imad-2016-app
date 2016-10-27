console.log('Loaded!');

//change the main content in loading page 
var element = document.getElementById('mainText');
element.innerHTML = 'Hi Welcome to the website' ;

//move the dragon

var img = document.getElementById('dragie');
img.onclick = function () {
    img.style.marginleft ='100px';
    };