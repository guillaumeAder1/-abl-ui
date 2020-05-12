import { css } from '@emotion/core';

const orange = {
	_300: '#FFB534',
	_500: '#FF9F1C',
	_800: '#C56F14',
};
const gray = {
	_100: '#E0EFF1',
	_200: '#C0CED6',
	_500: '#A0AEBA',
	_600: '#6f7d91',
	_800: '#282F48',
	_900: '#10132D',
};


export const theme = {
	primary: {
		light: orange._300,
		main: orange._500,
		dark: orange._800,
	},
	bg: {
		light: gray._200,
		main: gray._500,
		dark: gray._600,		
	},
	font: {
		main: gray._800,
	},
	border: {
		main: gray._900,
	}
};

export const font = css`
	fontFamily: 'helvetica, arial',
	fontSize: 12,
	color: '${theme.font.main}',
`;
export const baseBlock = css`
	padding: 5px;
	border: 1px solid ${theme.bg.dark};
	border-radius: 0px;
	background-color: ${theme.bg.main};
`;
export const button = css`
	${baseBlock}
	padding: 2px 3px;
	:active {
		background-color: ${theme.primary.main};
	}
	:focus {
		outline: 2px solid ${theme.bg.light};
	}
`;
