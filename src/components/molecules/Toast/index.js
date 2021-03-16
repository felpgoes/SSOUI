import React from 'react';

import {
  Container,
  WarningToastContainer,
  InfoContainer,
  ErrorToastContainer,
  SuccessToastContainer,
} from './styles';

function Toast(props) {
  return <Container {...props} />;
}

export const WarningToast = ({ children }) => {
  return (
    <InfoContainer>
      <WarningToastContainer size="40" />
      <span>{children}</span>
    </InfoContainer>
  );
};

export const ErrorToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <ErrorToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};
export const SuccessToast = ({ children, size }) => {
  return (
    <InfoContainer>
      <SuccessToastContainer size={size} />
      <span>{children}</span>
    </InfoContainer>
  );
};

export default Toast;
