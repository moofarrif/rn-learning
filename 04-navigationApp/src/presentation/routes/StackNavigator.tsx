import {createStackNavigator} from '@react-navigation/stack';

import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeScreen} from '../screens/home/homeScreen';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string; price: number};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatior = () => {

  return (
    <>
      <HamburgerMenu />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
};
