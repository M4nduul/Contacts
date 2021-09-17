import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Notifications, Settings, Profile} from './screens';
import BottomTabs from './BottomTabs';

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack = createStackNavigator();

export const MyNavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default MyNavigationStack;
