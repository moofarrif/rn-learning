import Icon from '@react-native-vector-icons/ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Tab1screen} from '../screens/tabs/Tab1screen';
import {globalColors} from '../theme/theme';
import {TopTabNavigator} from './TopTabsNavigator';
import {StackNavigatior} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const ButtonTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        sceneStyle: {
          backgroundColor: globalColors.background,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => <Icon name={'airplane-outline'} color={color} size={20} />,
        }}
        component={Tab1screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => <Icon name={'bar-chart-outline'} color={color} size={20} />,
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => <Icon name={'play-outline'} color={color} size={20} />,
        }}
        component={StackNavigatior}
      />
    </Tab.Navigator>
  );
};
