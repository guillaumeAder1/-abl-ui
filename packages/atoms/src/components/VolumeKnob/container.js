import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Knob from './knob';

const GridContainer = styled('div')`
	max-width: ${(props) => `${props.width}px`};
	max-height: ${(props) => `${props.height}px`};
	display: grid;
	background-color: grey;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 0.5fr 1fr 1fr;
	gap: 1px 1px;
	grid-template-areas: 'label label label label' 'circle circle . .' 'circle circle value .';
`;
const Label = styled('div')`
	background-color: gray;
	grid-area: label;
`;
const Circle = styled('div')`
	background-color: gray;
	grid-area: circle;
`;
const Value = styled('div')`
	background-color: gray;
	grid-area: value;
	margin-left: -100%;
`;
const Text = styled.div`
	margin: 10%;
`;

const Container = ({ label, value, width, height, ...props }) => {
	return (
		<GridContainer width={width} height={height}>
			<Label>{label}</Label>
			<Circle>
				<Knob />
			</Circle>
			<Value>
				<Text>{value}</Text>
			</Value>
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
	width: 100,
	height: 70,
	value: 50,
	label: 'Setting',
	lazy: false,
	onChange: (value) => {
		console.log(value);
	},
};
export default Container;
