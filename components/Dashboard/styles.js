import { css, cx } from '@emotion/css'

export const dropdown = css`
  position: absolute;
  top: 50px;
  background-color: #303557;
  padding: 8px 12px;
  z-index: 3;
  width: 100%;

	& a {
		display: block;
  	padding: 8px 12px;
	}
`;

export const dropdownGender = ({showGender}) => css`
  display: ${showGender ? 'block' : 'none'};
	position: absolute;
  top: 50px;
  background-color: #303557;
  padding: 8px 12px;
  z-index: 3;
  width: 100%;

	& a {
		display: block;
  	padding: 8px 12px;
	}
`;

export const dropdownAge = ({showAge}) => css`
  display: ${showAge ? 'block' : 'none'};
	position: absolute;
  top: 50px;
  background-color: #303557;
  padding: 8px 12px;
  z-index: 3;
  width: 100%;

	& a {
		display: block;
  	padding: 8px 12px;
	}
`;