import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { RiErrorWarningLine } from 'react-icons/ri';
import { GiCancel } from 'react-icons/gi';
import { BiCheckCircle } from 'react-icons/bi';

import theme from '../../../styles/theme';

export const Container = styled(ToastContainer).attrs((props) => ({
  autoClose: props.autoClose,
}))`
  .Toastify__toast-container {
    background-color: #ffff;
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
    background-color: #ffff;
    color: #ed1651;
    border-radius: 10px;
    font: 'Regular' 14px Work Sans;
    font: 200 14px Work Sans;
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
    background-color: #ffff;
    color: #afe97a;
    border-radius: 10px;
    font: 'Regular' 14px Work Sans;
    font: 200 14px Work Sans;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

export const WarningToastContainer = styled(RiErrorWarningLine).attrs(
  (props) => ({
    size: props.size,
  })
)`
  color: ${theme.yellowDefault};
  margin: 0;
`;

export const ErrorToastContainer = styled(GiCancel).attrs((props) => ({
  size: props.size,
}))`
  color: ${theme.redDefault};
  margin: 0;
`;
export const SuccessToastContainer = styled(BiCheckCircle).attrs((props) => ({
  size: props.size,
}))`
  color: ${theme.greenDefault};
  margin: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;

  span {
    font: 300 14px 'Calibri';
    color: #000000;
    padding-left: 10px;

    strong {
      font: bold 15px 'Calibri';
    }
  }
`;
