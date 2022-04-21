import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";
import FbIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import PeninterestIcon from "../images/icon-pinterest.svg";
import InstaIcon from "../images/icon-instagram.svg";

const FooterEl = styled.footer`
  position: relative;
  background-color: var(--col-dark);
`;

const FooterWraper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  padding: 8rem 6rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  ${media.tablet} {
    gap: 2.4rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  p {
    font-size: 1.8rem;
  }

  ${media.tablet} {
    align-items: flex-end;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  svg {
    cursor: pointer;
  }

  ${media.tablet} {
    svg {
      position: relative;

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 3px;
        width: 0;
        transition: all 0.5s;
        background-color: white;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const Credit = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: none;
  text-align: center;

  transform: translateX(-50%);
  font-size: 1.6rem;
  color: var(--col-primary);
  font-weight: 700;

  a {
    color: var(--col-light);
    font-size: 1.6rem;
  }

  ${media.tablet} {
    display: block;
  }
`;

const FooterList = styled.ul`
  color: var(--col-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  li {
    font-size: 1.8rem;
    cursor: pointer;
  }

  ${media.tablet} {
    flex-direction: row;

    li {
      position: relative;

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

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      <FooterWraper>
        <LeftSide>
          <Logo />
          <FooterList>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </FooterList>
        </LeftSide>

        <RightSide>
          <Icons>
            <FbIcon />
            <TwitterIcon />
            <PeninterestIcon />
            <InstaIcon />
          </Icons>

          <p>&copy; 2022 Loopstudios. All rights reserved.</p>
        </RightSide>

        {/* <Credit>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/besttlookk"
            target="_blank"
            rel="noreferrer"
          >
            Prabhash Ranjan
          </a>
          .
        </Credit> */}
      </FooterWraper>
    </FooterEl>
  );
};

export default Footer;
