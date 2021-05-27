import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import Header from '../components/Header';
import {AppContext} from '../context/context';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const UserList = props => {
  const context = useContext(AppContext);
  const [user, setUser] = useState(context.users);
  const removeFromContext = index => {
    // const hi={context.hy}
    context.myFun();
    var a = Object.assign([], user);
    a.splice(index, 1);
    setUser(a);
    context.users.splice(index, 1);
    //  console.log(a);
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: height * 0.09,
          alignItems: 'center',
        }}>
        <Text style={styles.flatListTextStyle}>{item.name}</Text>
        <Text style={styles.flatListTextStyle}>{item.cgpa}</Text>
        <Text style={styles.flatListTextStyle}>{item.city}</Text>
        <Icon
          name="delete"
          size={30}
          color="#900"
          // onPress={() => users.filter(user => user.id != 2)}
          //  onPress={() => users.filter(user => user.id != 2)}

          onPress={() => removeFromContext(index)}
        />
      </View>
    );
  };
  const sep = () => {
    return (
      <View
        style={{
          height: 1,
          width: '96%',
          alignSelf: 'center',
          backgroundColor: '#000',
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header title="User List" />

      <View
        style={{
          flex: 1,
          backgroundColor: '#FAF0E6',
          marginTop: '7%',
          marginBottom: '20%',
        }}>
        <FlatList
          style={{width: width * 0.9}}
          data={context.users}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={sep}
          //  extraData={selectedId}
        />
      </View>

      <FloatingButton
        onPressProp={() => props.navigation.navigate('AddUser')}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  flatListTextStyle: {
    fontSize: 15,
    color: '#000000',
  },
});

//make this component available to the app
export default UserList;
