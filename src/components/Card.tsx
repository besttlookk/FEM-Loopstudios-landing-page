import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { ImageWrapper } from "../styles/shared";
import { DataType } from "../types";

const CardEl = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 150px;
  padding: 2.4rem;

  ${media.tablet} {
    width: 100%;
    height: 350px;
  }

  ${media.laptop} {
    width: 100%;
    height: 420px;
  }
`;

const MobileImageWrapper = styled(ImageWrapper)`
  ${media.tablet} {
    display: none;
  }
`;

const DesktopImageWrapper = styled(ImageWrapper)`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 10;
  width: 60%;
  h3 {
    font-size: 2.8rem;
    text-transform: uppercase;
    color: var(--col-light);
  }
`;

const Card = ({ data }: { data: DataType }) => {
  return (
    <CardEl>
      <MobileImageWrapper>
        <Image
          alt="mobile-background"
          src={`/images/mobile/image-${data.image}.jpg`}
          layout="fill"
          objectFit="cover"
        />
      </MobileImageWrapper>
      <DesktopImageWrapper>
        <Image
          alt="mobile-background"
          src={`/images/desktop/image-${data.image}.jpg`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </DesktopImageWrapper>
      <CardText>
        <h3>{data.title}</h3>
      </CardText>
    </CardEl>
  );
};

export default Card;
