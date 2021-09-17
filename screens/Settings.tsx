import React from 'react';
import {Text, View, Pressable} from 'react-native';

export const Settings = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Settings sreen</Text>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home screen</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
