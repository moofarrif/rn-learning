import axios from 'axios';

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// Add interceptors for debugging
// pokeApi.interceptors.response.use(
//   response => response, // Pass through successful responses
//   error => {
//     console.error('Axios Error:', error.message);
//     if (error.response) {
//       console.error('Response Data:', error.response.data);
//       console.error('Response Status:', error.response.status);
//     } else if (error.request) {
//       console.error('No Response Received:', error.request);
//     } else {
//       console.error('Error Setting Up Request:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

// pokeApi.interceptors.request.use(
//   config => {
//     console.log('Request made with ', config);
//     return config;
//   },
//   error => {
//     console.error('Request error: ', error);
//     return Promise.reject(error);
//   },
// );
