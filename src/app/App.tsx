import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import appStore from '../store/store';
import { history } from '../store/root-reducer';
import routes from '../router/routes';
import Layout from '../components/Layout/Layout';

import { astragylTheme } from '../styles/astragyl-theme';

const App: FC = () => {
  return (
    <div>
      <Provider store={appStore}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={astragylTheme}>
            <Layout>
              <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    render={() => <route.component />}
                  />
                ))}
              </Switch>
            </Layout>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </div>
  );
};

export default App;
