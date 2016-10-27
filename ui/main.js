console.log('Loaded!');

//change the main content in loading page 
var element = document.getElementById('mainText');
element.innerHTML = 'Hi Welcome to the website' ;

//move the dragon

var img = document.getElementById('dragie');

//function MoveRight(){
//    marginLeft = marginLeft + 20;
//    img.style.marginLeft = marginLeft + 'px';
    
//}

img.onclick = function () {
 //   var interval = setInterval(MoveRight,100);
    img.style.marginLeft ='200px';
    };