import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const LogoWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 160px;

  ${media.tablet} {
    width: 140px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Image
        alt="logo"
        src="/images/logo.svg"
        layout="fill"
        objectFit="contain"
      />
    </LogoWrapper>
  );
};

export default Logo;
