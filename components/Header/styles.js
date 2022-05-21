import { css, cx } from '@emotion/css'

export const mainHeaderContainer = css`
  background-color: #10142a;
  padding: 10px 0;
  min-height: 72px;
  display: flex;
`;

export const mainHeader = css`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const mainNav = css`
  
  & ul {
    list-style: none;
    display: flex;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }

`;
export const mainNavLink = css`
  padding: 8px 15px;
  margin: 5px;

  &:hover{
    background-color: #303557;
    border-radius: 10px;
  }

`;

export const mobileIcon = css`
  display: none;

   @media screen and (max-width: 800px) {
    display: grid;
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const logoutBtn = css`
  background-color: #ec4f71;
  cursor: pointer;
  padding: 7px 20px;
  color: #fff;
  border-radius: 15px;
  margin: 0 3px;
  display: inline-block;
  max-height: 40px;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`