import { useAppSelector } from './useStore';
import { RootState } from '../store/store';

const selectCurrentPath = (appState: RootState): string => {
  return appState.router.location.pathname;
};

export default function useCurrentPath(): string {
  return useAppSelector(selectCurrentPath);
}
