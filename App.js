import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import Home from './Home';

import stores from './stores/index';

function App() {
  return (
    <Provider store={stores}>
      <Home />
    </Provider>
  );
}

export default App;
