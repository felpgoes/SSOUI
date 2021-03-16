import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #cccccc;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      input {
        font-weight: 500;
      }
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      input {
        font-weight: 500;
      }
      border-color: #0080ff;

      & > svg {
        fill: #0080ff;
      }
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      input {
        font-weight: 500;
      }

      & > svg {
        fill: #0080ff;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background: #e1e1e1;
      cursor: not-allowed;
    `}

    ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #202020;
    }

    ${({ disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
      `}
    ${({ width }) =>
      width &&
      css`
        width: ${width}px;
      `}
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
