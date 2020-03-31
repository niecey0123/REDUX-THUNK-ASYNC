import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './Reducers/Index'
import './css/styles.css'
import App from "./Components/App"
const store = createStore(
reducer,
applyMiddleware(thunk, logger)
)
render(
<Provider store={store}>
   <App />
</Provider>,
document.getElementById('root')
)