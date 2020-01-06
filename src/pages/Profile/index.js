import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';

export default function Profile() {
  return (
    <Background>
      <View />
    </Background>
  );
}

const tabIcon = ({ tintColor }) => (
  <Icon name="person" size={20} color={tintColor} />
);

tabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: tabIcon,
};
