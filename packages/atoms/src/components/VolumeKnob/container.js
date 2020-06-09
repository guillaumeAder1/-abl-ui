import React, { useState, useEffect, useRef } from 'react';
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
	const [mousePos, setMousePos] = useState(0);
	const [isPressed, setPressed] = useState(false);
	let lineRef = useRef(null);
	useEffect(() => {
		if (isPressed) {
			window.addEventListener('mousemove', update);
			window.addEventListener('mouseup', release);
			return () => {
				window.removeEventListener('mousemove', update);
				window.addEventListener('mouseup', release);
			};
		} else {
			console.warn('releASED');
		}
	}, [isPressed]);

	const release = () => {
		setPressed(false);
	};
	const update = (evt) => {
		const value = mousePos - evt.clientY;
		lineRef.current.setAttribute('transform', 'rotate(' + value + ', 15, 15)');
	};
	return (
		<GridContainer width={width} height={height}>
			<Label height={labelHeight}>{label}</Label>
			<Button
				onMouseDown={(evt) => {
					evt.persist();
					setMousePos(evt.clientY);
					setPressed(true);
				}}
				onMouseUp={release}
				size={circleSize}
			>
				<Knob forwardedRef={lineRef} size={circleSize} />
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
