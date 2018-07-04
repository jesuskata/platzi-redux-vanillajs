import { createStore } from 'redux';

const $form = document.getElementById('form'); // El signo de pesos en la const ayuda a identificar elementos del DOM
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
}

const initialState = [ // Lista de objetos (array)
  {
    "title": "Dios de Milagros",
  },
  {
    "title": "Eres Todopoderoso",
  },
  {
    "title": "Es Hora de Adorarle",
  },
]

const store = createStore(
  (state) => state, // reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer de redux-devtools-extension https://github.com/zalmoxisus/redux-devtools-extension
)

const $container = document.getElementById('playlist');
const playlist = store.getState(); // Este es un método que nos da el store de Redux
playlist.forEach((item) => {
  const template = document.createElement('p'); // Creamos un template con párrafo
  template.textContent = item.title; // Aquí estamos declarando que el texto que irá en el p será el título del item
  $container.appendChild(template); // Con esto agregamos un hijo al final
})

console.log(store.getState());