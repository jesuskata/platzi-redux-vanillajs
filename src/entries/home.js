// console.log("Hello World");

const $form = document.getElementById('form'); // El signo de pesos en la const ayuda a identificar elementos del DOM
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
}