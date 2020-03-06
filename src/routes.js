import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Usuário',
            titleStyle: {
              justifyContent: 'space-between',
              textAlign: 'center',
            },
            headerBackTitleStyle: {
              alignSelf: 'center',
            },
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            titleStyle: {
              justifyContent: 'space-between',
              textAlign: 'center',
            },
            headerBackTitleStyle: {
              alignSelf: 'center',
            },
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
