import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Edit from '../screens/Edit';
import Gatstart from '../screens/Gatstart';
import Login from '../screens/Login';
import { View,Image } from 'react-native';
import Profile from '../screens/Profile';



const Tab = createBottomTabNavigator();

const Tabnavigation=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image style={{width:30,height:20,}} source={require('../assest/images/home.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Prifile',
          tabBarIcon: ({ color, size }) => (
            <Image style={{width:25,height:25,}} source={require('../assest/images/Vector.png')}/>
          ),
          tabBarBadge: 4,
        }}
      />
      <Tab.Screen
        name="Gatstart"
        component={Gatstart}
        options={{
          tabBarLabel: 'Getstart',
          tabBarIcon: ({ color, size }) => (
            <Image style={{width:25,height:25,}} source={require('../assest/images/setting.png')}/>
          ),
        }}
      />
       <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarLabel: 'Edit',
          tabBarIcon: ({ color, size }) => (
            <Image style={{width:25,height:25,}} source={require('../assest/images/edit.png')}/>
          ),
        }}
      />
    </Tab.Navigator>

  );
}
export default Tabnavigation