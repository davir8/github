import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '~/components';
import { LoginScreen } from '~/screens';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: props => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
