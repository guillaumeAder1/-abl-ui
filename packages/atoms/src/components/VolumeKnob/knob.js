import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SvgContainer = styled('svg')`
	height: 100%;
	width: 100%;
	fill: gray;
`;
const Circle = styled('circle')`
	cy: 15px;
	cx: 17px;
	r: 13px;
	stroke: black;
	fill: transparent;
	stroke-width: 2px;
`;
const Knob = ({ ...props }) => {
	return (
		<Fragment>
			<SvgContainer>
				<Circle />
			</SvgContainer>
		</Fragment>
	);
};

export default Knob;
