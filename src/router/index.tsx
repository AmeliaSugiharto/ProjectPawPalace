ximport React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Homepage2,
} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage2"
        component={Homepage2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;