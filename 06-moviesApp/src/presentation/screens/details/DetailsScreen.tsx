import {StackScreenProps} from '@react-navigation/stack';

import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';

import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';
import {MovieDetails} from './MovieDetails';
import {RootStackParamList} from '../../navigations/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // const { movieId } = useRoute().params;
  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
