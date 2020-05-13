import React from 'react';
import Button from './Button';
import Select from './Select';
import Slider from './Slider';
import styled from '@emotion/styled';
import { baseBlock } from 'style/vars';

const Wrapper = styled.div`
	${baseBlock}
	width: 100px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	> div {
		display: flex;
		justify-content: space-between;
	}
	.slider{ 
		// background:red;
	}
`;

const ButtonSelect = () => (
	<Wrapper>
		<Select><option>value</option></Select>
		<Slider />
		<div>
			<Button text='On'>on</Button>
			<Button text='On'>option</Button>
		</div>
	</Wrapper>
);
export default ButtonSelect;