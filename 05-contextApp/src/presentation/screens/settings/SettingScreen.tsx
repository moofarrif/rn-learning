import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingScreen = () => {
  const incrementBy = useCounterStore(state => state.incrementBy);
  const count = useCounterStore(state => state.count);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Counter:{count}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(+1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
