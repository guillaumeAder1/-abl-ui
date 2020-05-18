import React from 'react';
import Slider from 'components/VolumeSlider/';

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
	</div>
);
