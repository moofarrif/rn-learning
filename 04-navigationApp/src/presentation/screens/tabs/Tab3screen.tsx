import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import Icon from '@react-native-vector-icons/ionicons';
import {globalStyles} from '../../theme/theme';

export const Tab3screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text style={globalStyles.text}>Tab 3 screen</Text>
      <Icon name={'folder-open'} size={40} />
    </View>
  );
};
