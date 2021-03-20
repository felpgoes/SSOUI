import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Creators as AuthActions } from '../../store/ducks/auth';

import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

const ChangePassword = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [queryToken, setQueryToken] = useState({
    token: params.get('token')?.replaceAll(' ', '+'),
    email: params.get('email'),
  });
  const { loading } = useSelector((state) => state.auth);
  const handleSubmit = useCallback(
    async (data) => {
      try {
        // eslint-disable-next-line no-debugger
        debugger;
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string()
            .trim()
            .matches(
              /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W_]){1,})(?!.*\s).{6,}$/g,
              'A senha deve ter ao menos 6 caracteres e ser uma combinação de letras maiúsculas e minúsculas, números e simbolos'
            )
            .required('A senha é obrigatória'),
          confirmPassword: Yup.string()
            .trim()
            .matches(
              /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W_]){1,})(?!.*\s).{6,}$/g,
              'A senha deve ter ao menos 6 caracteres e deve ser uma combinação de letras maiúsculas e minúsculas, números e simbolos'
            )
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
            .required('A senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const requestBody = {
          password: data.password,
          token: queryToken.token,
          email: queryToken.email,
        };
        dispatch(AuthActions.changePasswordRequest(requestBody));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
        }
      }
    },
    [queryToken, dispatch]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Alterar sua senha</h1>
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />
            <Input
              icon={FiLock}
              name="confirmPassword"
              type="password"
              placeholder="Confirmar senha"
            />
            <Button disabled={loading} type="submit">
              Enviar
            </Button>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ChangePassword;
