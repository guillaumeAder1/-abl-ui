import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SvgContainer = styled('svg')`
	fill: gray;
`;
const Circle = styled('circle')`
	cy: ${(props) => `${props.size / 2}px`};
	cx: ${(props) => `${props.size / 2}px`};
	r: ${(props) => `${props.size / 2 - 1}px`};
	stroke: black;
	fill: transparent;
	stroke-width: 2px;
`;
const Knob = ({ size, forwardedRef, ...props }) => {
	return (
		<Fragment>
			<SvgContainer>
				<g>
					<Circle size={size} />
					<line
						ref={forwardedRef}
						x1="0"
						y1="14.5"
						x2="15"
						y2="15"
						strokeWidth="2"
						stroke="black"
					></line>
				</g>
			</SvgContainer>
		</Fragment>
	);
};

export default Knob;
