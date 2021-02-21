const POINTER_HEIGHT = 10;
const SLIDER_HEIGHT = 130;

const pixelToValue = (pixelValue, maxHeight, max) => {
	const percent = pixelValue / maxHeight;
	return Math.round(max * percent);
};

const valueToPixel = (value, maxHeight, max) => {
	const percent = value / max;
	return percent * maxHeight;
};

export const buildTicks = (nbr) => {
	const arr = Array(Math.floor(nbr / 2))
		.fill()
		.map((el, i) => (i % 2 === 0 ? 'long' : 'short'));
	return nbr % 2 === 0
		? [...arr, ...arr.reverse()]
		: [...arr, 'short', ...arr.reverse()];
};
export { pixelToValue, valueToPixel, POINTER_HEIGHT, SLIDER_HEIGHT };
