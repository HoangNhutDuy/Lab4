

var img = document.querySelector('.img_container img');

function rotate() {
    img.style.transform += "rotate(20deg)";

}
setInterval(rotate, 2000);