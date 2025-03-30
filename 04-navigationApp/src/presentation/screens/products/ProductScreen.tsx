import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';

export const ProductScreen = () => {
  const {id, name, price} =
    useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={globalStyles.container}>
      <Text style={style.text}>ID: {id}</Text>
      <Text style={style.text}>Nombre: {name}</Text>
      <Text style={style.text}>Precio: {price}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    marginTop: 20,
  },
});
