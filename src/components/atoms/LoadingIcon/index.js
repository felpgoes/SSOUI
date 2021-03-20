import React from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import WrapperFlex from '../../molecules/WrapperFlex';
import { ContainerEmptyContent } from './styles';

export default function LoadingIcon({ marginLeft, marginTop, width, size }) {
  return (
    <WrapperFlex
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      height="100%"
      justifyCenter
      alignCenter
    >
      <ContainerEmptyContent>
        <AiOutlineLoading3Quarters size={size || '50'} color="#0086ff" />
      </ContainerEmptyContent>
    </WrapperFlex>
  );
}
