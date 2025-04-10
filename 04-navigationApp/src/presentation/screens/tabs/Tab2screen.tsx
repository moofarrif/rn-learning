import {Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import {globalStyles} from '../../theme/theme';

export const Tab2screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text style={globalStyles.text}>Tab 2 screen</Text>
      <Icon name={'rocket-outline'} size={40} />
    </View>
  );
};
