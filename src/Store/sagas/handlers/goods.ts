import { IItem } from './../../../Interfaces/IItem';
import { call, put } from "redux-saga/effects";
import { getGoodsError,getGoodsStart,getGoodsSuccess } from '../../orderSlice';
import { requestGetGoods } from "../requests/goods";

export function* handleGetGoods() {
  try {

    const response:IItem[] = yield call(requestGetGoods);
    yield put(getGoodsSuccess(response))


  } catch (error) {
    yield put(getGoodsError(error));

    console.log(error);
  }
}
