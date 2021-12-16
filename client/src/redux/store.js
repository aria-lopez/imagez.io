import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];

const store = createStore(rootreducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
