import {useQuery} from '@tanstack/react-query';
import {StyleSheet, View} from 'react-native';
import {getPokemons} from '../../../actions/pokemons';
import {PokeballBg} from '../../components/ui/PokeballBg';
import {FlatList} from 'react-native-gesture-handler';
import {Pokemon} from '../../../domain/entities/pokemon';
import {Text} from 'react-native-paper';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../../components/pokemon/PokemonCard';

const MINUTES = 1000 * 60;
const STALE_TIME = 5 * MINUTES;

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {data: pokemons = [], isLoading} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: STALE_TIME,
  });

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBg style={style.imgPosition} />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemons: Pokemon, index) => `${pokemons.id}+${index}`}
        numColumns={2}
        style={{marginTop: top + 20}}
        ListHeaderComponent={() => (
          <Text
            variant="displayMedium"
            style={{marginTop: 20, marginBottom: 20, marginLeft: 10}}>
            Pokedex
          </Text>
        )}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
