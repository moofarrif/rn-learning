import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
// import { ButtonTabNavigator } from './presentation/routes/BottomTabsNavigator';
// import {StackNavigatior} from './presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigatior /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
