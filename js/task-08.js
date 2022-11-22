const refs = {
  form: document.querySelector('.login-form'),
  button: document.querySelector('button[type="submit"]'),
};

const inSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Будь-ласка заповніть всі поля.");
  }
  const user = {};
  user.email = email.value;
  user.password = password.value;
  console.log(user);
  e.currentTarget.reset();
};


refs.form.addEventListener('submit', inSubmit);










