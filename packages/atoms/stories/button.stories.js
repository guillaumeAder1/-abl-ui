import React from 'react';
import Button from 'components/Button';
import Select from 'components/Select';
import ButtonSelect from 'components/Block';

export default {
	title: '@abl/Basic components',
	component: {
		Button,
		Select,
		ButtonSelect,
	},
};

export const button = () => <Button> Hello world </Button>;
export const select = () => (
	<Select>
		<option name='value1'>value1</option>
		<option name='value2'>value2</option>
		<option name='value3'>value3</option>
	</Select>
);
export const buttonSelect = () => <ButtonSelect></ButtonSelect>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
