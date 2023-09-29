import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_CATEGORY, GET_QUIZ, SET_CATEGORY, SET_QUIZ } from '../actions/actHome';
import { GetCategory } from '../../service/svcCategory';
import { GetQuiz } from '../../service/svcQuiz';


function* fetchDataCategory() {
    try {
        const response = yield call(GetCategory)
        yield put({
            type: SET_CATEGORY,
            payload: response.data.trivia_categories
        })
    } catch (error) {
        console.log('Error in fetchDataCategory: ', error);
    }
}

function* fetchDataQuiz(action) {
    try {
        const response = yield call(GetQuiz, action.payload)
        yield put({
            type: SET_QUIZ,
            payload: response.data.results
        })
    } catch (error) {
        console.log('Error in fetchDataQuiz: ', error);
    }
}

function* rootSaga() {
    yield takeEvery(GET_CATEGORY, fetchDataCategory)
    yield takeEvery(GET_QUIZ, fetchDataQuiz)
}

export default rootSaga