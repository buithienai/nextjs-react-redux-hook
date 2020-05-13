import { put, takeEvery } from 'redux-saga/effects';
import { UPDATE_USER, UPDATE_USER_SUCCESS } from '../constants/appConstants';

export function* updateUser(action) {
    yield put({
        type: UPDATE_USER_SUCCESS, data: action.data
    })
}

export function* watchApp() {
    yield takeEvery(UPDATE_USER, updateUser);
}