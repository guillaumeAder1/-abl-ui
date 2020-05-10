import React from 'react';
import styled from "@emotion/styled";

const Wrapper = styled.button`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 4px;
  background: #5cdb95;
  color: #05385b;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
`;
const Button = props => {
  const handleClick = () => alert('okokook');
  return (
    <Wrapper onClick={handleClick} >{props.text}</Wrapper>
  )
}

export default Button;