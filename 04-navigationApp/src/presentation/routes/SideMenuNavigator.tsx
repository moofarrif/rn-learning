import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {useWindowDimensions, View} from 'react-native';
import {ButtonTabNavigator} from './BottomTabsNavigator';
import Icon from '@react-native-vector-icons/ionicons';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigatior} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Icon name="bonfire-outline" color={color} size={25} />
          ),
        }}
        name="Tabs"
        component={ButtonTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person-outline" color={color} size={25} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 75,
          width: 75,
          alignSelf: 'center',
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 100,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
