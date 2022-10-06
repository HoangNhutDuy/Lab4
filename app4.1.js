


var red = document.querySelector('.red_btn');
var yellow =document.querySelector('.yellow_btn');
var green =document.querySelector('.green_btn');
var black = document.querySelector('.black_btn')
var reset = document.querySelector('.reset_btn')
function render(color){
 document.body.style.backgroundColor = color;
}
yellow.addEventListener('click',function(){
    render('yellow');
});
red.addEventListener('click',function(){
    render('red');
});
green.addEventListener('click',function(){
    render('green');
});
black.addEventListener('click',function(){
    render('black');
});
reset.addEventListener('click',function(){
    render('#fff');
});

