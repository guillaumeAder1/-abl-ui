import React, { useState, useEffect, useRef } from 'react';
import { useDragAndDrop } from '../VolumeSlider/useDragAndDrop';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Knob from './knob';
import {
	calculateInitValue,
	valueToAbsolute,
	convertDashArray,
	angleToValue,
} from './utils';
import { font } from 'style/vars';

const GridContainer = styled('div')`
	max-width: ${(props) => `${props.width}px`};
	max-height: ${(props) => `${props.height}px`};
	display: flex;
	flex-direction: column;
	padding: 2px;
	&:focus {
		outline: 1px dashed black;
	}
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
	height: 45%;
	width: 45%;
	bottom: 0;
	right: 0;
	position: absolute;
	text-align: end;
	${font};
	font-size: 10px;
`;

const Container = ({
	label,
	value,
	min,
	max,
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
	const [curValue, setCurvalue] = useState(0);
	const [mousePos, setMousePos] = useState(0);
	const [isPressed, setPressed] = useState(false);
	const [saved, setSaved] = useState(0);
	const tmpPos = useRef(0);
	const containerRef = useRef(null);
	const lineRef = useRef(null);
	const circleRef = useRef(null);
	// useDragAndDrop(isPressed, update, release);
	useEffect(() => {
		if (isPressed) {
			containerRef.current.focus();
			window.addEventListener('mousemove', update);
			window.addEventListener('mouseup', release);
			return () => {
				window.removeEventListener('mousemove', update);
				window.removeEventListener('mouseup', release);
			};
		}
	}, [isPressed]);

	useEffect(() => {
		// mounted
		const initVal = calculateInitValue(min, max, value, angleMin, angleMax);
		lineRef.current.setAttribute(
			'transform',
			`rotate(${initVal}, ${circleSize / 2}, ${circleSize / 2})`
		);
		const convert = convertDashArray(min, max, initVal, angleMin, angleMax);
		circleRef.current.style.strokeDasharray = 100 + convert;
		setSaved(-initVal);
		setCurvalue(valueToAbsolute(initVal, min, max, angleMin, angleMax));
	}, []);
	useEffect(() => {}, [tmpPos.current]);

	const release = () => {
		setPressed(false);
		setSaved(tmpPos.current);
	};
	const update = (evt) => {
		const diffMouse = mousePos - evt.clientY;
		const originalValue = saved - diffMouse;
		let value = originalValue < 0 ? Math.abs(originalValue) : -originalValue;
		if (value <= angleMin) {
			value = angleMin;
		} else if (value >= angleMax) {
			value = angleMax;
		} else {
			tmpPos.current = originalValue;
		}
		lineRef.current.setAttribute(
			'transform',
			`rotate(${value}, ${circleSize / 2}, ${circleSize / 2})`
		);
		const realValue = angleToValue(min, max, value, angleMin, angleMax);
		circleRef.current.style.strokeDasharray = 100 + realValue;
		console.warn(realValue);
		setCurvalue(valueToAbsolute(value, min, max, angleMin, angleMax));

		!lazy && onChange({ value, realValue }); // maybe use callback
	};
	return (
		<GridContainer
			role="slider"
			tabIndex="0"
			ref={containerRef}
			width={width}
			height={height}
			onMouseDown={(evt) => {
				evt.persist();
				setMousePos(evt.clientY);
				setPressed(true);
			}}
		>
			<Label height={labelHeight}>{label}</Label>
			<Button size={circleSize}>
				<Knob
					maxAngle={angleMax}
					forwardedRef={lineRef}
					circleRef={circleRef}
					size={circleSize}
				/>
				<Text>{curValue}</Text>
			</Button>
		</GridContainer>
	);
};
Container.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number,
	label: PropTypes.string,
	onChange: PropTypes.func,
	angleMin: PropTypes.number,
	angleMax: PropTypes.number,
	lazy: PropTypes.bool,
};
Container.defaultProps = {
	width: 60,
	height: 70,
	value: 33, //absolut value, val <= max && val >= min
	min: 0,
	max: 100,
	label: 'Setting',
	lazy: false,
	angleMax: 270,
	angleMin: 0,
	onChange: (value) => {
		// console.log(value);
	},
};
export default Container;
