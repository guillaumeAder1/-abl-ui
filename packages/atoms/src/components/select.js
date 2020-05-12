import React from 'react';
import styled from '@emotion/styled';
import { font, button } from 'style/vars';


const Wrapper = styled.select`
	${font}
	${button}
`;
const Button = ({children, ...props}) => {
	console.warn(props);
	const handleClick = () => {};
	return (
		<Wrapper onClick={handleClick} >{children}</Wrapper>
	);
};

export default Button;