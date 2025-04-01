import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {NowPlaying,isLoading} = useMovies();
  console.log(NowPlaying)

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
