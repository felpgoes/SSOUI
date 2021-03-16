import React, { useCallback, useRef } from 'react';
import { FiMail, FiArrowLeft, FiLogIn } from 'react-icons/fi';

import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Creators as AuthActions } from '../../store/ducks/auth';

import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

const ForgotPassword = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(AuthActions.signInRequest(data));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
        }
      }
    },
    [history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperação de senha</h1>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Button type="submit">Enviar</Button>
          </Form>
          <Link to="/signin">
            <FiArrowLeft />
            Voltar para logon
          </Link>
          <br />
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

export default ForgotPassword;
