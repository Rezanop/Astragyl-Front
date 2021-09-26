import React, { FC, ComponentType } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import appStore from '../store/store';
import { history } from '../store/root-reducer';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Play from '../pages/Play/Play';
import LearnMore from '../pages/LearnMore/LearnMore';
import ContactUs from '../pages/ContactUs/ContactUs';
import { astragylTheme } from '../styles/astragyl-theme';

const App: FC = () => {
  return (
    <div>
      <Provider store={appStore}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={astragylTheme}>
            <Layout>
              <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/play" render={() => <Play />} />
                <Route exact path="/learn-more" render={() => <LearnMore />} />
                <Route exact path="/contact-us" render={() => <ContactUs />} />
              </Switch>
            </Layout>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </div>
  );
};

export default App;
