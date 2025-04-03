import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
import React from 'react';
// import { ButtonTabNavigator } from './presentation/routes/BottomTabsNavigator';
// import {StackNavigatior} from './presentation/routes/StackNavigator';

type Props = React.PropsWithoutRef<{
  name: string;
}>;

export const App: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      {/* <StackNavigatior /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
