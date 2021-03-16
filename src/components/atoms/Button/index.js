import React from 'react';

import { Container } from './styles';

const Button = ({ disabled, children, ...rest }) => (
  <Container disabled={disabled} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
