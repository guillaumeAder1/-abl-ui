const POINTER_HEIGHT = 10;
const SLIDER_HEIGHT = 130;

const pixelToValue = (pixelValue, maxHeight, max) => {
	const percent = pixelValue / maxHeight;
	return Math.round(max * percent);
};

export { pixelToValue, POINTER_HEIGHT, SLIDER_HEIGHT };
