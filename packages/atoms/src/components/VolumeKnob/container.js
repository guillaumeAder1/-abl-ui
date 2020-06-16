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

const Container = ({
	label,
	value,
	width,
	height,
	lazy,
	onChange,
	angleMin,
	angleMax,
	...props
}) => {
	const labelHeight = height / 4.5;
	const circleSize = width / 2;
	const [mousePos, setMousePos] = useState(0);
	const [isPressed, setPressed] = useState(false);
	const [saved, setSaved] = useState(0);
	let lineRef = useRef(null);
	useEffect(() => {
		if (isPressed) {
			window.addEventListener('mousemove', update);
			window.addEventListener('mouseup', release);
			return () => {
				window.removeEventListener('mousemove', update);
				window.addEventListener('mouseup', release);
			};
		}
	}, [isPressed]);

	useEffect(() => {
		console.log('mounted');
	}, []);

	const release = () => {
		setPressed(false);
		const regExp = /\(([^)]+)\)/;
		const val = regExp.exec(lineRef.current.getAttribute('transform'));
		const t = val[0].replace('(', '').replace(')', '');
		const angle = t.split(',')[0];
		setSaved(parseInt(angle, 10));
	};
	const update = (evt) => {
		const diffMouse = mousePos - evt.clientY;
		let value = saved - diffMouse;
		if (value < 0) {
			value = 360 - Math.abs(value);
		} else if (value > 360) {
			value = Math.abs(360 - value);
		}
		lineRef.current.setAttribute('transform', 'rotate(' + value + ', 15, 15)');
		!lazy && onChange(value);
	};
	const add = () => {
		let value = saved + 15;
		if (value > 360) {
			value = Math.abs(360 - value);
		}
		lineRef.current.setAttribute('transform', 'rotate(' + value + ', 15, 15)');
		setSaved(value);
		console.warn(lineRef.current.getAttribute('transform'), value);
	};
	const substract = () => {
		let value = saved - 15;
		if (value < 0) {
			value = 360 - Math.abs(value);
		}
		lineRef.current.setAttribute('transform', 'rotate(' + value + ', 15, 15)');
		setSaved(value);
		console.warn(lineRef.current.getAttribute('transform'), value);
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
				size={circleSize}
			>
				<Knob forwardedRef={lineRef} size={circleSize} />
				<Text>{value}</Text>
			</Button>
			<button onClick={add}>+</button>
			<button onClick={substract}>-</button>
		</GridContainer>
	);
};
Container.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	value: PropTypes.number,
	label: PropTypes.string,
	onChange: PropTypes.func,
	angleMin: PropTypes.number,
	angleMax: PropTypes.number,
	lazy: PropTypes.bool,
};
Container.defaultProps = {
	width: 60,
	height: 50,
	value: 50, // as a percentage
	label: 'Setting',
	lazy: false,
	angleMax: 270,
	angleMin: 0,
	onChange: (value) => {
		// console.log(value);
	},
};
export default Container;
