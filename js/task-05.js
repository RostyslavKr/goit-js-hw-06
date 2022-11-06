const refs = {
    input: document.querySelector('input#name-input'),
    nameLable: document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onInputEmpty);
refs.input.removeEventListener('input', onInputFull);

function onInputEmpty(event) {
    refs.nameLable.textContent =  event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}

function onInputFull(event) {
    refs.nameLable.textContent = !event.currentTarget.value;
}