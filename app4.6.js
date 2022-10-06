

var form = document.querySelector('form');
var email = document.querySelector('#email');
var password = document.querySelector('#password')
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}
// showError(email,undefined);

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = '';
    parent.classList.remove('error');
}
// function checkEmptyError(listInput) {
//     let isEmptyError = false;
//     listInput.forEach(input => {
//         input.value = input.value.trim();
//         if (!input.value) {
//             isEmptyError = true;
//             showError(input, 'undefined');
//         } else {
//             showSuccess(input);
//         }
//     });
//     return isEmptyError;
// }
function checkErrorEmail(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    let isEmptyEmail = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Invalid Email");
    }
    return isEmptyEmail;

}
function checkPassword(input, max, min) {
    input.value = input.value.trim();
    let isPasswordError = false;
    if (input.value < min) {
        let isPasswordError = true;
        showError(input, `Phai co it nhat ${min} ky tu`)

    }
    if (input.value > max) {
        let isPasswordError = true;

        showError(input, `Password chi duoc phep co nhieu nhat ${max} ky tu`);
    }
    return isPasswordError;
}
showSuccess(email);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // let isEmptyError = checkEmptyError([email, password]);
    let isEmailError = checkErrorEmail(email);
    let isPasswordError = checkPassword(password, 30, 3);
})