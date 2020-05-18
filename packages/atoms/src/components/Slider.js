import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const basePointer = styled.div`
	width: 0px;
	height: 0px;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
	border-right: 10px solid grey;
	position: absolute;
`;

const Pointer = ({ top, ...props }) => {
	const Point = styled(basePointer)`
		top: ${top}px;
	`;
	return <Point {...props} />;
};

const Slider = ({ min, max, value }) => {
	const nbrTick = 10;
	const nbrMeasure = 4;

	const ticks = new Array(nbrTick)
		.fill()
		.map((el, i) => <div key={i} className="tick"></div>);
	const measures = new Array(nbrMeasure)
		.fill()
		.map((el, i) => <div key={i}>{i}</div>);

	const [pointerVal, setPointerVal] = useState(0);
	const [isPressed, setIsPressed] = useState(false);

	const clickHandler = (evt) => {
		// setIsPressed(!isPressed);
		// setPointerVal(pointerVal + 10);
	};
	const onDragStart = (evt) => {
		console.warn('start');
		setIsPressed(true);
	};
	const onDragEnd = (evt) => {
		console.warn('end');
		setIsPressed(false);
	};
	const updateCusor = (evt) => {
		if (isPressed) {
			console.log(evt);
			setPointerVal(evt.clientY - evt.currentTarget.offsetTop);
		}
	};

	return (
		<React.Fragment>
			<style>{`
					.slider {
						display: flex;
						height: 130px;
						position:relative;
						width: 40px;
						margin: auto;
						justify-content: space-between;
						padding: 2px;
					}
					.slider:focus {
						outline: 1px dashed black;
					}
					.section {
						flex: 1 1 35%;
						display: flex;
						justify-content: space-between;
					}
					.bar{
						height: 100%;
						flex-basis: 47%;
						background-color: black;
					}
					.scale{
						height: 100%;
						width: 5px;
						display: flex;
						justify-content: space-between;
						flex-direction: column;
					}
					.tick {
						margin: 2px;
						height: 1px;
						width: 100%;
						background: black;
					}
					.number{
						flex-direction: column;
						font-size: 10px;
						line-height: 10px;
						font-family: helvetica;
						text-align: end;
					}
			`}</style>
			<div
				onMouseDown={onDragStart}
				onMouseUp={onDragEnd}
				onMouseMove={(evt) => {
					evt.persist();
					updateCusor(evt);
				}}
				role="slider"
				tabIndex="0"
				className="slider"
			>
				<div className="section">
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="scale">
					<Pointer top={pointerVal} />
					{ticks}
				</div>
				<div className="section number">{measures}</div>
			</div>
		</React.Fragment>
	);
};

Slider.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number,
};

export default Slider;
