import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Knob from './knob';

const GridContainer = styled('div')`
	display: grid;
	background-color: red;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 0.5fr 1fr 1fr;
	gap: 1px 1px;
	grid-template-areas: 'label label label label' 'circle circle . .' 'circle circle . .';
`;
const Label = styled('div')`
	background-color: gray;
	grid-area: label;
`;
const Circle = styled('div')`
	background-color: gray;
	grid-area: circle;
`;
const Container = ({ label, value, ...props }) => {
	return (
		<GridContainer>
			<Label>{label}</Label>
			<Circle>
				<Knob />
			</Circle>
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
	width: 50,
	height: 40,
	value: 50,
	label: 'Setting',
	lazy: false,
	onChange: (value) => {
		console.log(value);
	},
};
export default Container;
