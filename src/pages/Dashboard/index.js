import React from 'react';
import { View } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons as Icon } from '@expo/vector-icons';
// import { Container } from './styles';

import Background from '~/components/Background';

export default function Dashboard() {
  return (
    <Background>
      <View />
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
