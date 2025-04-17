import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/home/homeScreen';
import {PokemonScreen} from '../screen/pokemon/PokemonScreen';
import {SearchScreen} from '../screen/search/SearchScreen';

export type RootStackParam = {
  HomeScreen: undefined;
  PokemonScreen: {id: number};
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
