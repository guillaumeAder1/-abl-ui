import React from 'react';
import { Slider } from 'components/VolumeSlider';
import { Knob } from 'components/VolumeKnob';

export default {
	title: '@abl/Knobs',
	component: {
		Slider,
	},
};

export const slider = () => (
	<div>
		<h1>Slider</h1>
		<Slider />

		<h1>Knob</h1>
		<Knob />
	</div>
);
