import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParams, 'Product'>;

export const ProductScreen : React.FC<Props>= ({route,navigation}) => {

  // const {id, name, price} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  // const navigation = useNavigation();
  const {id, name, price} = route.params

 
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={style.text}>ID: {id}</Text>
        <Text style={style.text}>Nombre: {name}</Text>
        <Text style={style.text}>Precio: {price}</Text>
      </View>
      <View style={style.bot}>
        <PrimaryButton label="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    marginVertical: 12,
  },
  bot: {
    flexDirection: 'column-reverse',
    flex: 1,
  },
});
