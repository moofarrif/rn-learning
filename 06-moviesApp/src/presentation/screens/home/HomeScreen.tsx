import {StyleSheet, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={(style.container, {marginTop: top + 20})}>
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

const style = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
});
