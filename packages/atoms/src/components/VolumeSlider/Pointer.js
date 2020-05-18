import React from 'react';
import styled from '@emotion/styled';
import { POINTER_HEIGHT } from './utils';

const basePointer = styled.div`
	width: 0px;
	height: 0px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: ${POINTER_HEIGHT}px solid grey;
	position: absolute;
`;

const Pointer = ({ top, ...props }) => {
	const Point = styled(basePointer)`
		top: ${top}px;
	`;
	return <Point {...props} />;
};
export default Pointer;
