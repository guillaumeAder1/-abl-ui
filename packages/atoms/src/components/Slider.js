
import React from 'react';
import PropTypes from 'prop-types';
import { font } from 'style/vars';
// import { jsx, css } from '@emotion/core';

const Slider = ({min, max, value}) => {

	const nbrTick = 10;
	const nbrMeasure = 4;

	const ticks = new Array(nbrTick).fill().map((el, i) => (<div key={i} className="tick"></div>));
	const measures = new Array(nbrMeasure).fill().map((el, i) => <div key={i}>{i}</div>);

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
			<div role="form" css={font} tabIndex="0" className="slider">
				<div className="section">
					<div className="bar"></div>
					<div className="bar"></div>	
				</div>
				<div className="scale">
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