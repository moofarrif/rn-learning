import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '0370268f3f7c8ab5c11160fe6c951fed',
  },
});

// repository ...
