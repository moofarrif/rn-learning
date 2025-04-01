import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: { moveId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
