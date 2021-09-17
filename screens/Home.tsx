import React from 'react';
import {Text, View, Pressable} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Home sreen</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile screen</Text>
      </Pressable>
    </View>
  );
};

export default Home;
