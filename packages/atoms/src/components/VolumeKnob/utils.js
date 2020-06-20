export const angleToValue = (angMin, angMax, value) => {};
export const valueToAngle = (angMin, angMax, value) => {};
export const calculateInitValue = (min, max, value, angleMin, angleMax) => {
	const valPercentage = (value - min) / (max - min);
	return (angleMax - angleMin) * valPercentage;
};
