import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione  o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
