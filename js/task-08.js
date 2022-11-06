const refs = {
  form: document.querySelector('.login-form'),
};
const inSubmit = (e) => {
    
    refs.form.reset();
};

refs.form.addEventListener('submit', inSubmit);






