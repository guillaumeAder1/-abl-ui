import React from 'react';
import Button from './Button';
import Select from './Select';
import { Slider } from './VolumeSlider';
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
`;

const ButtonSelect = () => (
	<Wrapper>
		<Select>
			<option>value</option>
		</Select>
		<Slider min={0} max={100} value={75} nbrTick={15} measures={[0, 50, 100]} />
		<div>
			<Button text="On">on</Button>
			<Button text="On">option</Button>
		</div>
	</Wrapper>
);
export default ButtonSelect;
