import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { ThunkMiddleware } from 'redux-thunk';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// proobar si asi no tira mas errores de process:
//  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//  const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)))
////
///


//POR SI VUELVE A PASAR EL ERROR DE PROCESS
window.process = { ...window.process } 

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))); // PARA PODER HACER ACCIONES ASINCRONAS CON PROMESAS. ES COMO UN INTERMEDIARIO QUE AL DESPACHAR UNA ACCION, HACE QUE ESPERE Y RECIEN UNA VEZ CUMPLIDA, AHI SE LA ENTREGA AL STORE.
// SIN EL THUNK, LA ACTION DESPACHADA ENVIARIA UNDEFINED AL STORE, Y EL STORE DE LA MISMA MANERA, LE AVISARIA AL REDUCER SOBRE ESTA ACTION QUE ES UNDEFINED. 












export default store;