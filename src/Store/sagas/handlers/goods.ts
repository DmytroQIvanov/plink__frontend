import { IItem } from './../../../Interfaces/IItem';
import { call, put } from "redux-saga/effects";
import { getGoodsError,getGoodsStart,getGoodsSuccess } from '../../orderSlice';
import { requestGetGoods } from "../requests/goods";

export function* handleGetGoods() {
  try {

    // yield put(getGoodsStart());
    console.log("response")

    const response:IItem[] = yield call(requestGetGoods);
    console.log(response)
    yield put(getGoodsSuccess(response))


  } catch (error) {
    yield put(getGoodsError(error));

    console.log(error);
  }
}
