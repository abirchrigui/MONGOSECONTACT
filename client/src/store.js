import {createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'
import root_reducer from './reducers/reducer'

const middleware=[thunk] ;
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store=createStore(root_reducer , composeEnhencer(applyMiddleware(...middleware)))

export default store