import {Pressable, Text} from 'react-native';
import {colors, globalStyle} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress
}: Props) => {
  return (
    <Pressable
      onPress={ () => onPress()}
      style={({pressed}) => ({
        ...globalStyle.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,

        // borderRadius: 100,
        // marginHorizontal: 10,
        // paddingVertical: 20,
        // paddingHorizontal: 30,
      })}>
      <Text
        style={{
          ...globalStyle.buttonText,
          color: blackText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
