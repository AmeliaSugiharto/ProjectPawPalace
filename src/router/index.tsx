import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Homepage} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
