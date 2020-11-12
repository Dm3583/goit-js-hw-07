const validationInput = document.querySelector('#validation-input');

let stringLength = parseInt(validationInput.dataset['length']);

validationInput.onclick = () => {
    if (event.target.classList.contains('invalid')) {
        event.target.classList.remove('invalid')
    }
    if (event.target.classList.contains('valid')) {
        event.target.classList.remove('valid')
    }
}

// validationInput.addEventListener('focusout',
//     () => {
//         event.target.value.length !== stringLength ?
//             event.target.classList.add('invalid') :
//             event.target.classList.contains('invalid')?
//             event.target.classList.replace('invalid','valid'):
//             event.target.classList.add('valid');
//     });

validationInput.addEventListener('focusout', inputHandler);

function inputHandler() {
    if (event.target.value.length !== stringLength) {
        event.target.classList.add('invalid');
    } else {
        if (event.target.classList.contains('invalid')) {
            event.target.classList.remove('invalid')
        }
        event.target.classList.add('valid');
    }
}