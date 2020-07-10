import { useEffect } from 'react';

export function useDragAndDrop(
	isPressed,
	updateFn,
	releaseFn,
	callback = () => {}
) {
	useEffect(() => {
		if (isPressed) {
			callback();
			window.addEventListener('mousemove', updateFn);
			window.addEventListener('mouseup', releaseFn);
			return () => {
				window.removeEventListener('mousemove', updateFn);
				window.removeEventListener('mouseup', releaseFn);
			};
		}
	}, [isPressed]);
}
