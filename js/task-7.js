const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

textSpan.style.fontSize = 14 + "px";
let fSize = parseInt(textSpan.style.fontSize);

fontSizeControl.setAttribute('min', 5);
fontSizeControl.setAttribute('max', 60);
fontSizeControl.setAttribute('value', fSize);

fontSizeControl.addEventListener('input', () => {
    fSize = event.target.value;
    textSpan.style.fontSize = fSize + "px"
})