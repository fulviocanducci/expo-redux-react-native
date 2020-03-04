import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Status, Login } from './pages';

import stores from './stores/index';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="screen">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
