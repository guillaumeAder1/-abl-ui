import React from 'react';
import styled from '@emotion/styled';
import { font } from 'style/vars';


const Wrapper = styled.select`
  ${font}
  padding: 1px 2px;
	border-color: #333333;
	border-radius: 0;
  background-color: lightgray;
  :hover {
    background-color: orange;
  }
`;
const Button = ({children, ...props}) => {
	console.warn(props);
	const handleClick = () => {};
	return (
		<Wrapper onClick={handleClick} >{children}</Wrapper>
	);
};

export default Button;