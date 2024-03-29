import { createStore, applyMiddleware, compose } from "redux"; // methode
import thunk from "redux-thunk";
import rootReducer from './reducers';


const initialState = {};
//to use redux dev tool in google chrome we need to add <<window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()>>
const store = createStore(rootReducer, initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;