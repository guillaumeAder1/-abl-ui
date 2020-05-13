
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { font } from 'style/vars';
// import { jsx, css } from '@emotion/core';

const Slider = ({min, max, value}) => {

	const nbrTick = 10;
	const nbrMeasure = 4;

	const ticks = new Array(nbrTick).fill().map((el, i) => (<div key={i} className="tick"></div>));
	const measures = new Array(nbrMeasure).fill().map((el, i) => <div key={i}>{i}</div>);

	const [pointerVal, setPointerVal] = useState(value);
	
	const clickHandler = (evt) => {
		console.log(evt.clientY);
	};
	return (
		<React.Fragment>
			<style>{`
					.slider {
						display: flex;
						height: 130px;
						width: 40px;
						margin: auto;
						justify-content: space-between;
						padding: 2px;
					}
					.slider:focus {
						outline: 1px dashed black;
					}
					.pointer {
						width: 0px;
						height: 0px;
						border-top: 5px solid transparent;
						border-bottom: 5px solid transparent;
						border-right: 10px solid grey;
						position: relative;
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
				onClick={evt => { evt.persist(); clickHandler(evt); }}
				role="form"
				css={font}
				tabIndex="0"
				className="slider">
				<div className="section">
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="scale">
					<div className="pointer"></div>
					{ ticks }
				</div>
				<div css={font} className="section number">
					{ measures }
				</div>
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