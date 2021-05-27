import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
const UserTextInput = props => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={props.onChange}
      defaultValue=""
      //  value={props.value}
      placeholder={props.title}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  textInput: {
    width: '75%',
    alignSelf: 'center',
    // flex: 0.07,
    paddingVertical: 20,
    fontSize: 15,
    margin: '5%',
    borderRadius: 3,
    backgroundColor: '#FFFFE0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default UserTextInput;
