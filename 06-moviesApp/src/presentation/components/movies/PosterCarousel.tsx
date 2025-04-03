import {View} from 'react-native';
import React from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

type PosterCarouselProps = {
  movies: Movie[];
  height?: number;
};

export const PosterCarousel = ({movies, height = 440}: PosterCarouselProps) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster movies={movie} key={movie.id} />
        ))}
      </ScrollView>
    </View>
  );
};
