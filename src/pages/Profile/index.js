import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';
import {
  SubmitButton,
  Title,
  Form,
  FormInput,
  Container,
  Separator,
  LogoutButton,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }
  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboard="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => oldPassword.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setOldPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passwordRef}
            value={password}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
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
