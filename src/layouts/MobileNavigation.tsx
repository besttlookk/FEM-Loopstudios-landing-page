import React from "react";
import styled from "styled-components";
import NavList from "../components/NavList";
import media from "../styles/media";

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: 50;
  background-color: var(--col-dark);
  padding: 0 2.4rem;

  &.active {
    transform: translateX(0);
  }

  ${media.tablet} {
    display: none;
  }
`;

const MobileNavigation = ({ isMenuActive }: { isMenuActive: boolean }) => {
  return (
    <Wrapper className={isMenuActive ? "active" : ""}>
      <nav>
        <NavList />{" "}
      </nav>
    </Wrapper>
  );
};

export default MobileNavigation;
