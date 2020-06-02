import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Knob from './knob';
import { font } from 'style/vars';

const GridContainer = styled('div')`
	max-width: ${(props) => `${props.width}px`};
	max-height: ${(props) => `${props.height}px`};
	display: flex;
	flex-direction: column;
`;
const Label = styled('div')`
	flex: 0 0 ${(props) => `${props.height}px`};
	background-color: lightblue;
	${font};
`;
const Button = styled('div')`
	display: flex;
	position: relative;
	max-width: ${(props) => `${props.size}px`};
	max-height: ${(props) => `${props.size}px`};
`;

const Text = styled.div`
	height: 50%;
	width: 50%;
	bottom: 0;
	right: 0;
	position: absolute;
	line-height: 100%;
	background-color: white;
	text-align: end;
	${font};
	font-size: 10px;
	background-color: lightblue;
`;

const Container = ({ label, value, width, height, ...props }) => {
	const labelHeight = height / 4.5;
	const circleSize = width / 2;
	const hanldeClick = () => {
		const line = document.querySelector('line');
		let i = 0;
		setInterval(function () {
			i += 2;
			line.setAttribute('transform', 'rotate(' + i + ', 15, 15)');
		}, 25);
	};
	return (
		<GridContainer width={width} height={height}>
			<Label height={labelHeight}>{label}</Label>
			<Button onClick={hanldeClick} size={circleSize}>
				<Knob size={circleSize} />
				<Text>{value}</Text>
			</Button>
		</GridContainer>
	);
};
Container.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	value: PropTypes.number,
	label: PropTypes.string,
	onChange: PropTypes.func,
	lazy: PropTypes.bool,
};
Container.defaultProps = {
	width: 60,
	height: 50,
	value: 50,
	label: 'Setting',
	lazy: false,
	onChange: (value) => {
		console.log(value);
	},
};
export default Container;
