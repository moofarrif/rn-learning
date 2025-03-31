import {View, FlatList} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const Products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 40,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 50,
  },
];
export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <FlatList data={Products} keyExtractor={item => item.id.toString()} renderItem={({item}) => 
          <PrimaryButton label={`${item.name} `} onPress={() => navigation.navigate('Product', item)} />} 
      />

      <PrimaryButton label="Back" onPress={() => navigation.goBack()} />
      <PrimaryButton onPress={() => navigation.navigate('Home')} label="Settings" />
    </View>
  );
};
