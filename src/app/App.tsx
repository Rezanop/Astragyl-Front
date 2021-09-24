import React, { FC } from 'react';
import { Provider } from 'react-redux';

import createAppStore from '../store/store';

const App: FC = () => {
  return (
    <div>
      <Provider store={createAppStore}>
        <h1>Astragyl</h1>
      </Provider>
    </div>
  );
};

export default App;
