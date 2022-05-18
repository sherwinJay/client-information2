import { css, cx } from '@emotion/css'


export const sidebarContainer = ({ isOpen }) => css`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: ${isOpen ? "grid" : "none"};
  align-items: center;
  left: 0;
  top: ${isOpen ? "0" : "-100%"};
  opacity: ${isOpen ? "100%" : "0"};
  transition: 0.3s ease-in-out;
  text-align: center;
  grid-template-rows: 2fr 1fr;
  justify-content: center;

  & ul {
    list-style: none;
    padding: 0;
  }
  
  & li {
    padding: 10px 0;
  }
`;

export const sidebarMenu = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-top: 100px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const sideNavLinks = css`
 color: #fff;
 font-size: 18px;
 text-decoration: none;
 padding: 10px 0;
`;

export const iconWrapper = css`
  position: absolute;
  background-color: transparent;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  color: #fff;
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
  align-self: self-start;
`