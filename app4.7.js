

var buttons = document.querySelectorAll('button');

var random = Math.floor(Math.random() * buttons.length)
buttons.forEach((button) => {
    buttons[random].addEventListener('click', function () {
        buttons[random].style.opacity = '0';
    })
    button.addEventListener('click', function () {
        if (button != buttons[random]) {

            alert('ban da chon sai');
        }
    })

});
