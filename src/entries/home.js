import { createStore } from 'redux';

const $form = document.getElementById('form'); // El signo de pesos en la const ayuda a identificar elementos del DOM
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title, // Se puede dejar así por ES6, sino se escribiría: title: 'title'
    }
  })
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

const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload];
    default:
      return state;
  }
}

const store = createStore(
  reducer, // reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer de redux-devtools-extension https://github.com/zalmoxisus/redux-devtools-extension
)

function render() { // Convertimos en una función para que sea llamada cuando deseemos
  const $container = document.getElementById('playlist');
  const playlist = store.getState(); // Este es un método que nos da el store de Redux
  $container.innerHTML = ''; // Este método deja en blanco el listado antes de agregar un nuevo elemento
  playlist.forEach((item) => {
    const template = document.createElement('p'); // Creamos un template con párrafo
    template.textContent = item.title; // Aquí estamos declarando que el texto que irá en el p será el título del item
    $container.appendChild(template); // Con esto agregamos un hijo al final
  })
}

render();

function handleChange() {
 render();
}

store.subscribe(handleChange);

// console.log(store.getState());