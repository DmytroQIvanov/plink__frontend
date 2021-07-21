import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import orderSlice from './orderSlice'
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
      order:orderSlice
  },middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})

sagaMiddleware.run(watcherSaga);