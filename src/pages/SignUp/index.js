import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Creators as AuthActions } from '../../store/ducks/auth';

import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background, AnimationContainer } from './styles';

import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

const SignUp = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
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
        dispatch(AuthActions.signUpRequest(data));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
        }
      }
    },
    [dispatch]
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input icon={FiUser} name="name" placeholder="Nome" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />
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
              Cadastrar
            </Button>
          </Form>
          <Link to="/login">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
