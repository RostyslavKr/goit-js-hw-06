const refs = {
 buttonEl: document.querySelector('.change-color'),
 bodyEl: document.querySelector('body'),
 bgColorSpanEl: document.querySelector('.color'),
};

const onChangeColorBody = () => {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
  const color = getRandomHexColor();
  
  refs.bodyEl.style.backgroundColor = color;
  
  refs.bgColorSpanEl.textContent = color;
  
  // refs.bgColorSpanEl.insertAdjacentHTML('beforeend', `${color}`);
  console.log(refs.bgColorSpanEl);
  
}

refs.buttonEl.addEventListener('click', onChangeColorBody);


