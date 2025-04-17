import 'react-native-gesture-handler';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StackNavigator} from './presentation/navigator/StackNavigator';
import {ThemeContextProvider} from './presentation/context/ThemeContext';

const queryClient = new QueryClient();

export const PokedexApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
