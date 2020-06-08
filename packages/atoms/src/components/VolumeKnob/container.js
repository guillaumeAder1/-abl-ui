import React, { useState } from 'react';
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
const DragArea = styled('div')`
	position: absolute;
	width: 50px;
	height: 140px;
	background: rgba(255, 0, 5, 0.2);
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
	const [mousePos, setMousePos] = useState(0);
	const [isPressed, setPressed] = useState(false);
	const [lineRef, setLineRef] = useState(null);
	const hanldeClick = (evt) => {
		if (!lineRef) setLineRef(document.querySelector('line'));
		if (!isPressed) {
			setPressed(true);
			setMousePos(evt.clientY);
		}
	};
	const release = () => {
		if (isPressed) {
			setPressed(false);
			setMousePos(0);
		}
	};
	const update = (evt) => {
		if (isPressed) {
			console.log(lineRef);
			const value = mousePos - evt.clientY;
			console.log(value);
			lineRef.setAttribute('transform', 'rotate(' + value + ', 15, 15)');
		}
	};
	return (
		<GridContainer width={width} height={height}>
			<DragArea
				onMouseDown={(evt) => {
					evt.persist();
					hanldeClick(evt);
				}}
				onMouseMove={(evt) => {
					evt.persist();
					update(evt);
				}}
				// onMouseLeave={setPressed(false)}
				onMouseUp={release}
			/>
			<Label height={labelHeight}>{label}</Label>
			<Button size={circleSize}>
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
