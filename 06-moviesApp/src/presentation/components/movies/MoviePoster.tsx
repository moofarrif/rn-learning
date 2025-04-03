import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/Navigation';

interface Props {
  movies: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movies, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 3.5,
        paddingBottom: 20,
        paddingHorizontal: 5,
        opacity: pressed ? 0.9 : 1,
      })}
      onPress={() => navigation.navigate('Details', {movieId: movies.id})}>
      <View style={(style.imageContainer)}>
        <Image style={style.image} source={{uri: movies.poster}} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
