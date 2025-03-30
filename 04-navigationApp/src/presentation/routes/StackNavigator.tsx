import {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {useNavigation} from '@react-navigation/native';
import {HomeScreen} from '../screens/home/homeScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string; price: number};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigatior = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerShow: false,
    });
  }, [ navigator]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
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
  );
};
