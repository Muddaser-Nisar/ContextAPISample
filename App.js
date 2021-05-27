// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {AppContext} from './src/context/context';
// import UserList from './src/UI/UserList';
// import AddUser from './src/UI/AddUser';

// const Stack = createStackNavigator();
// const App = () => {
//   let users = [
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 2,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//     {
//       id: 1,
//       name: 'Muddaser',
//       cgpa: 3.96,
//       city: 'Murree',
//     },
//   ];
//   const myFun = () => {
//     console.log('Hello');
//     alert('Hello');
//   };
//   const myFun1 = obj => {
//     [
//       ...users,
//       {
//         id: 1,
//         name: 'Muddaser Nisar Abbasi',
//         cgpa: 3.96,
//         city: 'Murree',
//       },
//     ];
//     console.log(users[users.length - 1]);
//     console.log(users);
//     // console.log(users);
//   };
//   return (
//     <AppContext.Provider
//       value={{
//         users: users,
//         myFun: myFun,
//         myFun1: myFun1,
//       }}

//       //    value={{ value: [value, setValue], value2: [value2, setValue2] }}
//     >
//       <NavigationContainer>
//         <Stack.Navigator headerMode="none" initialRouteName="UserList">
//           <Stack.Screen name="UserList" component={UserList} />
//           <Stack.Screen name="AddUser" component={AddUser} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AppContext.Provider>
//   );
// };

// export default App;

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppContext} from './src/context/context';
import UserList from './src/UI/UserList';
import AddUser from './src/UI/AddUser';

const Stack = createStackNavigator();
const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 2,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
    {
      id: 1,
      name: 'Muddaser',
      cgpa: 3.96,
      city: 'Murree',
    },
  ]);
  const myFun = () => {
    console.log('Hello');
    alert('Hello');
  };
  const myFun1 = obj => {
    //[
    users.push(obj);
    //   ...users,
    //   {
    //     id: 1,
    //     name: 'Muddaser Nisar Abbasi',
    //     cgpa: 3.96,
    //     city: 'Murree',
    //   },
    // ];
    console.log(users[users.length - 1]);
    console.log(users);
    // console.log(users);
  };
  return (
    <AppContext.Provider
      value={{
        users: users,
        myFun: myFun,
        myFun1: myFun1,
      }}

      //    value={{ value: [value, setValue], value2: [value2, setValue2] }}
    >
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="UserList">
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
