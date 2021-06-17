import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WrapperFlex from '../../components/molecules/WrapperFlex';
import { Container, Content, Title, Background } from './styles';

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      window.open('https://master.dq4m5pwh5e0w6.amplifyapp.com/home');
    }, 3000);
  }, []);

  return (
    <Container>
      <Content>
        <WrapperFlex column>
          <Title>Olá {user.nome}, seja bem vindo!</Title>
          <Title>Você já pode acessar o Frety!</Title>
        </WrapperFlex>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
