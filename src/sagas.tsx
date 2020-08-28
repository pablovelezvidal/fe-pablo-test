import { call, put, takeLatest } from "redux-saga/effects";
import { receiveApiData } from "./actions";
import C from "./constants";
import { fetchData } from "./api";

function* getApiData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(C.REQUEST_API_DATA, getApiData);
}
