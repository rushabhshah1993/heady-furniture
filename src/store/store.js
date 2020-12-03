import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import navItemReducer from './reducers/navItemReducer';
import productsReducer from './reducers/productsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    navItem: navItemReducer,
    products: productsReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
