import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const game = () => {
  return 'gameReducer';
};

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  game,
});

export default rootReducer;
