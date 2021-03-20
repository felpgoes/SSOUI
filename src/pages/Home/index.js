import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, Title, Background } from './styles';

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container>
      <Content>
        <Title>Olá {user.nome}, seja bem vindo!</Title>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
