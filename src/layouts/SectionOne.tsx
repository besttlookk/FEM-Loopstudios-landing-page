import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Heading2 } from "../styles/shared";

const Section = styled.section`
  padding: 10rem 2.4rem;
  max-width: 128rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  width: 95vw;

  ${media.tablet} {
    display: flex;
    padding: 8rem 2.4rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  background-image: url(/images/mobile/image-interactive.jpg);
  background-size: cover;

  ${media.tablet} {
    width: 50%;
    height: 320px;
    background-image: url(/images/desktop/image-interactive.jpg);
  }

  ${media.laptop} {
    height: 400px;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 2rem 1.6rem;
  margin-top: 3.2rem;

  ${media.tablet} {
    width: 50%;
    margin-top: 0;
    text-align: left;
    padding: 3rem 3.2rem;
  }

  ${media.laptop} {
    width: 40%;
    position: relative;
    top: 100px;
    left: -100px;
    padding: 4rem 6rem;
    background-color: white;
  }
`;

const SectionOne = () => {
  return (
    <Section>
      <ImageWrapper />

      <Content>
        <Heading2>The leader in interactive VR</Heading2>
        <p>
          {" "}
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </Content>
    </Section>
  );
};

export default SectionOne;
