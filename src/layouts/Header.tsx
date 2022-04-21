import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CancelIcon from "../images/icon-close.svg";
import NavList from "../components/NavList";
import { Wrapper } from "../styles/shared";
import Logo from "../components/Logo";

const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  transition: 0.7s;

  &.active {
    background-color: var(--col-dark);
  }
`;

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);
`;

const DesktopNavigation = styled.nav`
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

const HamburgerWrapper = styled.div`
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;

const Header = ({
  isMenuActive,
  setIsMenuActive,
}: {
  isMenuActive: boolean;
  setIsMenuActive: (val: boolean) => void;
}) => {
  const [background, setBackground] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 200) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    });
  }

  return (
    <HeaderEl className={background ? "active" : ""}>
      <HeaderWrapper>
        <div>
          <Logo />
        </div>

        <div>
          <DesktopNavigation>
            <NavList />{" "}
          </DesktopNavigation>
          <HamburgerWrapper>
            {isMenuActive ? (
              <CancelIcon onClick={() => setIsMenuActive(false)} />
            ) : (
              <HamburgerIcon onClick={() => setIsMenuActive(true)} />
            )}
          </HamburgerWrapper>
        </div>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
