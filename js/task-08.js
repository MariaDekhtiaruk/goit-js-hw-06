const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail === `` || password === ``) {
    return alert(`empty field`);
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);
  form.reset();
  //   const formData = new FormData(event.currentTarget);
  //   const emailVal = formData.get('email');
  //   const passVal = formData.get('password');

  //   if (emailVal === `` || passVal === ``) {
  //     return alert(`empty field`);
  //   }

  //   const formRes = {
  //     email: emailVal,
  //     password: passVal,
  //   };
  //   console.log(formRes);
  //console.log(event.currentTarget.elements);
}
