import { takeLatest } from "redux-saga/effects";
import { handleGetGoods } from "./handlers/goods";
import { getGoodsStart, getGoodsSuccess } from "../orderSlice";

export function* watcherSaga() {
  yield takeLatest(getGoodsStart, handleGetGoods);
}
