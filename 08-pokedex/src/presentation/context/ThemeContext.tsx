import {createContext, PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import {getTheme} from '../../config/theme/themeConfig';

export const ThemeContext = createContext({
  isDark: true,
  theme: getTheme('dark'),
});

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
  const colorSchema = useColorScheme();
  const themeType = colorSchema === 'dark' ? 'dark' : 'light';
  const isDark = themeType === 'dark';

  const theme = getTheme(themeType);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider value={{isDark, theme}}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};
