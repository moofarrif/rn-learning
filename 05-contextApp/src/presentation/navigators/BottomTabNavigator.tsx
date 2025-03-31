import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {SettingScreen} from '../screens/settings/SettingScreen';
import {useCounterStore} from '../store/counter-store';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const count = useCounterStore(state => state.count);
  return (
    <>
      <Tab.Navigator
        // screenOptions={{
        //   headerRight: () => <Text>{count}</Text>,
        // }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </>
  );
};
