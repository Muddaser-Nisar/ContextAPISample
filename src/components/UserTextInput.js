//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {AppContext} from '../context/context';
// create a component
const UserTextInput = () => {
  const {users} = useContext(AppContext);

  return <Text>{users[0].name}</Text>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default UserTextInput;
