import React from 'react';
import styled from '@emotion/styled';
import { font } from 'style/vars';


const Wrapper = styled.button`
  ${font}
  padding: 1px 2px;
  border-color: #333333;
  background-color: lightgray;
  :hover {
    background-color: orange;
  }
`;
const Button = props => {
	const handleClick = () => {};
	return (
		<Wrapper onClick={handleClick} >{props.text}</Wrapper>
	);
};

export default Button;