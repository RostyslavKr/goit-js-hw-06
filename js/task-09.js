const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const bgColorSpanEl = document.querySelector('.color');

const onChangeColorBody = () => {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
  const color = getRandomHexColor();
  
  bodyEl.style.backgroundColor = color;

  bgColorSpanEl.insertAdjacentHTML('beforeend', `${color}`);

}

buttonEl.addEventListener('click', onChangeColorBody);


