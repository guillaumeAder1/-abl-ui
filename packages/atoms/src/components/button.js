import React from 'react';
import styled from '@emotion/styled';
import { font, button } from 'style/vars';


const Wrapper = styled.button`
  ${font}
  ${button}
`;
const Button = props => {
	const handleClick = () => {};
	return (
		<Wrapper onClick={handleClick} >{props.text}</Wrapper>
	);
};

export default Button;