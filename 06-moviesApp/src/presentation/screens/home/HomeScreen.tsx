import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 50}}>
        {/* main */}
        <PosterCarousel movies={nowPlaying} />
        {/* popular */}
        <HorizontalCarousel
          movie={popular}
          title="Popular"
          loadNextPage={popularNextPage}
        />
        {/* top rated */}
        <HorizontalCarousel movie={topRated} title="Top Rated" />
        {/* upcoming */}
        <HorizontalCarousel movie={upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
};
