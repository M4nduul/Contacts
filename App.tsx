import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTabs from './BottomTabs';
import MyNavigationStack from './MyNavigationStack';
import Example from './Example';
import SelectedElement from './SelectedElement';
export const App = () => {
  return (
    <NavigationContainer>
      {/* <MyNavigationStack /> */}
      <SelectedElement/>
      {/* <Example /> */}
      {/* <BottomTabs /> */}
    </NavigationContainer>
  );
};

export default App;
