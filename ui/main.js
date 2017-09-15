console.log('Loaded!');

//Change the text of main-text division
var element= document.getElementById('main-text');
element.innerHTML = "Welcome! \n Just tap on Dragon";


//move image 
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft + 1;
    img.style.marginLeft= marginLeft +'px';
}
img.onclick = function(){
    var interval=setInterval(moveRight,10);
};
