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
	const tmpPos = useRef(0);
	const containerRef = useRef(null);
	let lineRef = useRef(null);
	useEffect(() => {
		if (isPressed) {
			containerRef.current.focus();
			window.addEventListener('mousemove', update);
			window.addEventListener('mouseup', release);
			return () => {
				window.removeEventListener('mousemove', update);
				window.addEventListener('mouseup', release);
			};
		}
	}, [isPressed]);

	useEffect(() => {
		// console.log('mounted');
	}, []);

	const release = () => {
		setPressed(false);
		setSaved(tmpPos.current);
		// console.log(saved, tmpPos.current);
	};
	const update = (evt) => {
		const diffMouse = mousePos - evt.clientY;
		let value = saved - diffMouse;
		console.log(saved, diffMouse, value);
		if (value < 0) {
			value = 360 - Math.abs(value);
		} else if (value > 360) {
			value = Math.abs(360 - value);
		}
		tmpPos.current = value;
		lineRef.current.setAttribute('transform', 'rotate(' + value + ', 15, 15)');
		!lazy && onChange(value);
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
				console.log();
			}}
		>
			<Label height={labelHeight}>{label}</Label>
			<Button size={circleSize}>
				<Knob forwardedRef={lineRef} size={circleSize} />
				<Text>{tmpPos.current}</Text>
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
