import React from 'react';
import {Text, View, Pressable} from 'react-native';

export const Profile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile sreen</Text>
      <Pressable onPress={() => navigation.navigate('BottomTabs')}>
        <Text>Go to BottomTabs screen</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
