/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { font } from 'style/vars';
import { jsx, css } from '@emotion/core';

const paragraph = css`
  color: turquoise;
	border-bottom: 1px solid currentColor;
	cursor: pointer;
`;
const Slider = () => {
	return (
		<React.Fragment>
			<style>{`
					.slider {
						display: flex;
						height: 130px;
						max-width: 40px;
						border: 1px solid black;
						justify-content: space-between;
						padding: 2px;
					}
					.section {
						flex: 1 1 35%;
						display: flex;
						justify-content: space-between;
						// background: grey;
					}
					.bar{
						height: 100%;
						flex-basis: 47%;
						background-color:black;
					}
					.scale{
						// flex: 1 1 10%;
						height: 100%;
						width: 5px;
						// background: orange;
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
			<div  className="slider">
				<div className="section">
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="scale">
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
					<div className="tick"></div>
				</div>
				<div css={font} className="section number">
					<div className="">100</div>
					<div className="">75</div>
					<div className="">50</div>
					<div className="">25</div>
					<div className="">0</div>
				</div>
			</div>
		</React.Fragment>
	);
};
 
export default Slider;