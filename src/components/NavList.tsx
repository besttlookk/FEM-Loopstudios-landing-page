import React, { useRef } from "react";
import styled from "styled-components";
import media from "../styles/media";

import NavItem from "./NavItem";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.tablet} {
    flex-direction: row;
    gap: 2rem;
  }

  ${media.laptop} {
    gap: 2.8rem;
  }
`;

const NavList = () => {
  return (
    <ListEl>
      <NavItem label="About" />
      <NavItem label="Careers" />
      <NavItem label="Events" />
      <NavItem label="Products" />
      <NavItem label="Support" />
    </ListEl>
  );
};

export default NavList;
