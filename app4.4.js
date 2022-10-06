

var textArea = document.querySelector('#text_area')
var button = document.querySelector('button');
var input_text = document.querySelector('input');

function count(){
    var textAreaInput = textArea.value.trim();
    var textInput = input_text.value.trim();
    var count = textAreaInput.split(textInput).length -1;
    document.body.innerHTML = `Số lần xuất hiện là: ${count}`;
}
// button.addEventListener('click', function(){
//     count();

// })
button.addEventListener('click', count);
document.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        count();
    }
})