import { css, cx } from '@emotion/css'

export const messageModalContaner = ({ showMessage }) => css`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  justify-content: center;
  align-items: center;
  display: ${ showMessage ? 'flex' : 'none'};
`;

export const messageModal = css`
  padding: 60px 100px;
  background-color: #10142a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media screen and (max-width: 480px) {
    width: 320px;
    padding: 60px;
  }
`;

export const modalBtn = css`
  background-color: #338333;
  color: #fff;
  padding: 8px 20px;
  border-radius: 15px;
`;
export const closeBtn = css`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;