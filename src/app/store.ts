import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import tableSlice from '../app/slices/tableSlice';
import navSlice from '../app/slices/navSlice';

export const store = configureStore({
  reducer: {
    tableSlice: tableSlice,
    navSlice: navSlice
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
