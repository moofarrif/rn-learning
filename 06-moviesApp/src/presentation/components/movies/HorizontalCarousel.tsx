import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import React, { useRef} from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {resetCache} from '../../../../metro.config';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';
import {useEffect} from 'react';

interface Props {
  movie: Movie[];
  title?: string;
  loadNextPage?: () => void;
  onPress?: (movie: Movie) => void;
}
export const HorizontalCarousel = ({movie, title, loadNextPage}: Props) => {
  const isLoading = useRef(false); // ref proq no neceisto renderizar algo

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movie]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;
    loadNextPage && loadNextPage();
  };

  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 300,
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movie}
        renderItem={({item}) => (
          <MoviePoster movies={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
