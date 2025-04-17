import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const fonts = {
  displaySmall: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 20,
  },
  displayMedium: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 24,
  },
  bodyLarge: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 16,
  },
  bodyMedium: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  bodySmall: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 12,
  },
  labelLarge: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
    fontSize: 14,
  },
  labelMedium: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 12,
  },
  labelSmall: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 10,
  },
  regular: {fontFamily: 'Nunito-Regular', fontWeight: '400'},
  medium: {fontFamily: 'Nunito-Medium', fontWeight: '500'},
  bold: {fontFamily: 'Nunito-Bold', fontWeight: '700'},
  heavy: {fontFamily: 'Nunito-Heavy', fontWeight: '900'},
};

export const getTheme = (themeType: 'dark' | 'light') => ({
  ...(themeType === 'dark' ? MD3DarkTheme : MD3LightTheme),
  ...((themeType === 'dark' ? DarkTheme : LightTheme) as any),
  fonts,
});
