import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import tableSlice from '../app/slices/tableSlice';

export const store = configureStore({
  reducer: {
    tableSlice: tableSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
