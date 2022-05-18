import { css, cx } from '@emotion/css'

export const filterBar = css`
  background-color: #303557;
  padding: 10px 50px 10px 10px;
  text-align: center;
  border-radius: 25px;
  width: 175px;
  text-align: left;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const filterBarAge = ({showAge}) => css`
  &::after{
    content: '\\25bc';
    position: absolute;
    right: 15px;
    font-size: 12px;
    transform: ${ showAge ? 'rotate(180deg)' : 'rotate(0)' };
  }
`;

export const filterBarGender = ({showGender}) => css`
  &::after{
    content: '\\25bc';
    position: absolute;
    right: 15px;
    font-size: 12px;
    transform: ${showGender ? 'rotate(180deg)' : 'rotate(0)' };
  }
`;

export const dropdownContainer = css`
  position: absolute;
  top: 50px;
  background-color: #303557;
  z-index: 3;
  width: 100%;
  cursor: pointer;
  border: #10142a 1px solid;

	& a {
		display: block;
  	padding: 10px 14px;
	}
	& a:hover {
		background-color: #10142a;
	}
`;

export const dropdownGender = ({showGender}) => css`
  display: ${showGender ? 'block' : 'none'};
`;

export const dropdownAge = ({showAge}) => css`
  display: ${showAge ? 'block' : 'none'};
`;

export const active = css`
  background-color: #10142a;
`;