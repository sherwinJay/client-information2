import { css, cx } from '@emotion/css';

export const clientBoxWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }

  
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const clientBox = css`
  background-color: #303557;
  padding: 10px;
  position: relative;
  border-radius: 5px;
  min-height: 130px;
`;

export const editClientBtn = css`
  padding: 5px 7px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 35px;
  background-color: #2ac67e;
`;

export const deleteClientBtn = css`
  padding: 5px 7px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 35px;
  background-color: #ec4f71;
`;

export const topContainer = css`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const modalBoxContainer = ({ showModal }) => css`
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

export const modalBox = css`
  background-color: #303557;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: #ec4f71 5px solid;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const actionBtnContainer = css`
  position: absolute;
  top: 12px;
  right: 5px;
`