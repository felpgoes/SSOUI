import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import ChangePasswordBackground from '../../assets/images/change-password-background.svg';

const appearFromLeft = keyframes`

  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
  background: url(${ChangePasswordBackground}) no-repeat center;
  background-size: contain;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 0 0 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #0080ff;
    }

    a {
      color: #0080ff82;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#0080ff')};
      }
    }
  }

  > a {
    color: #0080ff82;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#0080ff')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
