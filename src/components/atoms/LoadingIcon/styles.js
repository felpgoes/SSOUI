import styled, { css, keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.svg`
  animation: ${rotate360} 1s steps(8) infinite;

  ${({ button, small }) =>
    button && small
      ? css`
          height: 20px;
        `
      : button
      ? css`
          height: 30px;
        `
      : ''}

  @media (max-width: 768px) {
    ${({ button }) =>
      !button
        ? css`
            height: 30px;
          `
        : ''}
  }
`;

export const ContainerEmptyContent = styled.div`
  text-align: left;
  font: 300 16px 'Calibri';
  letter-spacing: 1.12px;
  color: #5a5a5a;
  opacity: 1;

  svg {
    animation: ${rotate360} 2s linear infinite;
  }
`;
