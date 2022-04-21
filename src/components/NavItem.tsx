import React, { useState, useEffect } from "react";
import styled from "styled-components";
import media from "../styles/media";

const ItemEl = styled.li`
  /* padding: 0 2.4rem; */
  transition: all 0.5s;
  font-family: var(--font-secondary);
  font-weight: 300;
  font-size: 2.8rem;
  cursor: pointer;
  color: var(--col-light);
  text-transform: uppercase;

  ${media.tablet} {
    position: relative;
    text-transform: capitalize;
    font-size: 1.8rem;
    font-family: var(--font-primary);
    font-weight: 400;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: white;
      transition: all 0.5s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

const NavItem = ({ label }: { label: string }) => {
  return <ItemEl>{label}</ItemEl>;
};

export default NavItem;
