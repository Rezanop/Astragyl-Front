import { RootState } from '../store/store';

export const selectCurrentPath = (appState: RootState): string => {
  return appState.router.location.pathname;
};
