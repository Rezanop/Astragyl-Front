import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import rootReducer, { history } from './root-reducer';

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {router: RouterState, home: HomeState, contactUs: ContactUsState...}
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
