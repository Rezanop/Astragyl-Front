import { configureStore } from '@reduxjs/toolkit';

import rootReducer, { history } from './root-reducer';

const createAppStore = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof createAppStore.getState>;
// Inferred type: {router: RouterState, home: HomeState, contactUs: ContactUsState...}
export type AppDispatch = typeof createAppStore.dispatch;

export default createAppStore;
