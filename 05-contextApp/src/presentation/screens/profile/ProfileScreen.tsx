import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  const setName = useProfileStore(state => state.setName);
  const setEmail = useProfileStore(state => state.setEmail);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => setName('New Name')}>
        <Text>Change Name</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => setEmail('New@yopmail.com')}>
        <Text>Change Email</Text>
      </Pressable>
    </View>
  );
};
