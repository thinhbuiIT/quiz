import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import homeReducer from './reducer/rdcHome'
import rootSaga from "./saga/saHome";

const rootReducer = combineReducers({
    home: homeReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store

sagaMiddleware.run(rootSaga)