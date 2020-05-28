import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SvgContainer = styled('svg')`
	height: 100px;
	width: 100px;
	fill: gray;
`;
const Circle = styled('circle')`
	cy: 50px;
	cx: 50px;
	r: 50px;
	stroke: black;
	fill: transparent;
	stroke-width: 5px;
`;
const Knob = ({ ...props }) => {
	const test = Math.round(0.2);
	return (
		<div>
			<SvgContainer>
				<Circle />
			</SvgContainer>
		</div>
	);
};

export default Knob;
