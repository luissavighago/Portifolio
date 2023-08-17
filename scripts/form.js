const INPUT_NAME_ID = "input-name";
const INPUT_EMAIL_ID = "input-email";
const INPUT_MESSAGE_ID = "input-textarea";

const getValues = () => {
  return values = {
    name: document.getElementById(INPUT_NAME_ID).value.trim(),
    email: document.getElementById(INPUT_EMAIL_ID).value.trim(),
    message: document.getElementById(INPUT_MESSAGE_ID).value.trim()
  }
}

const valuesAreValid = (values) => {
  if(values.name.length <= 0){
    return false;
  }
  if(values.email.length <= 0){
    return false;
  }
  if(values.message.length <= 0){
    return false;
  }
  return true;
}

const sendEmail = (values) => {
  const url = 'http://localhost:3333/send';

  console.log(JSON.stringify(values));

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  .then(response => (response) => {
    console.log('Resposta:', response);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}

document.getElementById("form-contact").onsubmit = async (event) => {
  const values = getValues();
  if(!valuesAreValid(values)){
    return;
  }

  await sendEmail(values);

  event.preventDefault();
}