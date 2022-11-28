import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import priceHistorySlice from '../features/priceHistory/priceHistorySlice';


export const store = configureStore({
  reducer: {
    counter : counterSlice,
    priceHistory: priceHistorySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

