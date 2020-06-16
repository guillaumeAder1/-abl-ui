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

class Knob extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		console.warn('reredner');
		return (
			<Fragment>
				<SvgContainer>
					<Circle size={this.props.size} />
					<g ref={this.props.forwardedRef}>
						<line
							x1="1.5"
							y1="16"
							x2="15"
							y2="16"
							strokeWidth="2"
							stroke="red"
							strokeLinecap="round"
						></line>
						<line
							x1="2"
							y1="15"
							x2="15"
							y2="15"
							strokeWidth="2"
							stroke="black"
							strokeLinecap="round"
						></line>
					</g>
				</SvgContainer>
			</Fragment>
		);
	}
}

export default Knob;
