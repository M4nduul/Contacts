import React from 'react';
import {Text, View, Pressable} from 'react-native';

export const Notifications = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Notifications sreen
      </Text>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text>Go to Settings screen</Text>
      </Pressable>
    </View>
  );
};

export default Notifications;
