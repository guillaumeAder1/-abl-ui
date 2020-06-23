import React, { Fragment } from 'react';
import styled from '@emotion/styled';
// https://glennmccomb.com/articles/building-a-pure-css-animated-svg-spinner/#:~:text=When%20applied%20to%20an%20SVG,depending%20on%20the%20circle's%20radius.&text=A%20stroke%2Ddasharray%20of%20157,with%20r%3D%2245%22%20.

const SvgContainer = styled('svg')`
	fill: gray;
	overflow: visible;
`;
const BgCircle = styled('circle')`
	cy: ${(props) => `${props.size / 2}px`};
	cx: ${(props) => `${props.size / 2}px`};
	r: ${(props) => `${props.size / 2 - 2}px`};
	stroke: black;
	stroke-linecap: round;
	fill: transparent;
	stroke-width: 2px;
	stroke-dasharray: 100; /** C = 2 * Pi * r OR 100 if pathLength attr = 100 */
	stroke-dashoffset: ${(props) => `-${props.angle}`};
`;
const ValueCircle = styled('circle')`
	cy: ${(props) => `${props.size / 2}px`};
	cx: ${(props) => `${props.size / 2}px`};
	r: ${(props) => `${props.size / 2 - 1}px`};
	stroke: lime;
	stroke-linecap: round;
	fill: transparent;
	stroke-width: 2px;
	/** C = 2 * Pi * r OR 100 if pathLength attr = 100 */
	stroke-dashoffset: 100; /* percenttage: e.g 50% => half circle */
`;
class Knob extends React.PureComponent {
	constructor(props) {
		super(props);
		this.rad = props.size / 2;
		this.rotation = `rotate(90, ${this.rad}, ${this.rad})`;
		this.calcAngle = 100 - (this.props.maxAngle / 360) * 100;
	}
	render() {
		return (
			<Fragment>
				<SvgContainer>
					<g>
						<ValueCircle
							ref={this.props.circleRef}
							transform={this.rotation}
							pathLength="100"
							size={this.props.size}
						/>
					</g>
					<g>
						<BgCircle
							angle={this.calcAngle}
							pathLength="100"
							size={this.props.size}
						/>
					</g>
					{/* <Circle size={this.props.size} /> */}
					<g ref={this.props.forwardedRef}>
						<line
							x1={this.rad + 1}
							y1={this.rad * 2 - 1}
							x2={this.rad + 1}
							y2={this.rad}
							strokeWidth="2"
							stroke="red"
							strokeLinecap="round"
						></line>
						<line
							x1={this.rad}
							y1={this.rad * 2 - 1}
							x2={this.rad}
							y2={this.rad}
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
