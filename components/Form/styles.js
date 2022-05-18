import { css, cx } from '@emotion/css'

export const clientFormContainer = ({ showModal }) => css`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  display: ${showModal ? 'flex':'none'};
  justify-content: center;
  align-items: center;

`;

export const clientForm = css`
  width: 450px;
  margin: 0 auto;
  background-color: #303557;
  padding: 15px 20px;
  position: relative;
  border-radius: 10px;

  & input {
    display: block;
    width: 100%;
    padding: 10px 12px;
    border-radius: 15px;
    margin: 10px 0 15px;
    outline: none;
    border: none;
  }

  & select {
    display: block;
    width: 100%;
    padding: 10px 12px;
    border-radius: 15px;
    margin: 10px 0 15px;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const submitBtn = css`
  background-color: #3885d4;
  color: #fff;
  cursor: pointer;
`;

export const closeBtn = css`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;