import React, { useState } from 'react';
import styled from '@emotion/styled';
import { font, button } from 'style/vars';

const Wrapper = styled.button`
	${font}
	${button}
`;
const Button = ({ children, ...props }) => {
	const [val, setVal] = useState(0);
	const handleClick = () => {};
	return <Wrapper onClick={handleClick}>{children}</Wrapper>;
};

export default Button;
