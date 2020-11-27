import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import navItemReducer from './reducers/navItemReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    navItem: navItemReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
