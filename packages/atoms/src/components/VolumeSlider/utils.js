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
export { pixelToValue, valueToPixel, POINTER_HEIGHT, SLIDER_HEIGHT };
