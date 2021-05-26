//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import {AppContext} from './src/context/context';
import UserTextInput from './src/components/UserTextInput';
const {width, height} = Dimensions.get('window');

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Muddaser',
    },
  ];
  return (
    <AppContext.Provider value={{users}}>
      <View style={styles.container}>
        <Text>Context API Sample</Text>
        <Pressable
          onPress={() => alert(users)}
          style={{
            padding: 30,
            backgroundColor: 'green',
            margin: 15,
            borderRadius: 15,
            width: width * 0.5,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, color: '#ffffff'}}>Get Data</Text>
        </Pressable>
        <UserTextInput />
      </View>
    </AppContext.Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

//make this component available to the app
export default App;
