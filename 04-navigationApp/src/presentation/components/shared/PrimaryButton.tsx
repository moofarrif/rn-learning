import {Pressable} from 'react-native';
import {Text} from 'react-native-gesture-handler';

import {globalStyles} from '../../theme/theme';

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({label, onPress}: Props) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
