import { INCREMENT, DECREMENT } from '../actions';

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      // completa para este caso
      return { count: state.count + 1 };
    case DECREMENT:
      // Fill para este otro
      return { count: state.count - 1 };
    default:
      return state;
  }
};
