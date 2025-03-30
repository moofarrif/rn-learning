import {useEffect} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {globalColors} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={style.text}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Icon name={'menu-outline'} size={35} color={globalColors.primary}/>
        </Pressable>
      ),
    });
  }, [navigation ]);

  return <></>;
};

const style = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
});
