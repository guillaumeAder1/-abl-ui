import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';


const Slider = () => {
	return (
		<div>
			<style>{`
        .base {
					background-color: darkgreen;
					color: turquoise;
					writing-mode: bt-lr;
					-webkit-appearance: slider-vertical;
  				appearance: none;
        }
      `}</style>
			<input
				orient="vertical"
				className="base" 
				type="range" 
				step="1" 
				min="1"
				max="100" 
				value="5"
			/>
		</div>
	);
};
 
export default Slider;