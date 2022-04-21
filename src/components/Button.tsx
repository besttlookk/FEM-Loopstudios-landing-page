import React from "react";
import styled from "styled-components";

const ButtonEl = styled.button`
  text-transform: uppercase;
  padding: 1.2rem 4.2rem;
  border: 1px solid black;
  background-color: white;
  font-size: 1.4rem;
  letter-spacing: 5px;
  font-family: var(--col-secondary);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--col-dark);
    color: var(--col-light);
  }
`;

const Button = () => {
  return <ButtonEl>See all</ButtonEl>;
};

export default Button;
