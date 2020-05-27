import React from 'react';
import Button from 'components/button';
import Select from 'components/Select';

export default {
	title: '@abl/Basic components',
	component: {
		Button,
		Select,
	},
};

export const button = () => <Button> Hello world </Button>;
export const select = () => (
	<Select>
		<option name="value1">value1</option>
		<option name="value2">value2</option>
		<option name="value3">value3</option>
	</Select>
);
