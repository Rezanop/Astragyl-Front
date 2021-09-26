import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import homeReducer from '../pages/Home/HomeSlice';
import contactUsReducer from '../pages/ContactUs/ContactUsSlice';
import learnMoreReducer from '../pages/LearnMore/LearnMoreSlice';
import playReducer from '../pages/Play/PlaySlice';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  home: homeReducer,
  contactUs: contactUsReducer,
  learnMore: learnMoreReducer,
  play: playReducer,
});

export default rootReducer;
