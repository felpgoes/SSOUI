import styled from 'styled-components';
import HomeBackground from '../../assets/images/home-background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  place-content: center;
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${HomeBackground}) no-repeat center;
  background-size: contain;
`;

export const Title = styled.h1`
  color: #0080ff;
`;
