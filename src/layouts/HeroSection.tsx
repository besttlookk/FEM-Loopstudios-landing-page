import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";

const Section = styled.section`
  background-image: url(/images/mobile/image-hero.jpg);
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-top: var(--height-header);

  ${media.tablet} {
    background-image: url(/images/desktop/image-hero.jpg);
    background-size: cover;
    padding-top: 0;
  }
`;

const SectionWrapper = styled(Wrapper)`
  height: calc(100vh - var(--height-header));
  width: 100%;
  display: flex;
  align-items: center;

  ${media.tablet} {
    height: 100vh;
  }
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  color: var(--col-light);

  span {
    display: block;
  }

  ${media.mobile} {
    font-size: 5.2rem;
  }

  ${media.tablet} {
    font-size: 6.4rem;
    line-height: 1.2;
    span:last-child {
      display: inline;
    }
  }
`;

const Content = styled.div`
  border: 2px solid white;
  width: 100%;
  text-transform: uppercase;
  padding: 2.4rem;

  ${media.tablet} {
    max-width: 70rem;
    padding: 2.8rem;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <SectionWrapper>
        <Content>
          <Heading>
            Immersive <span>Experiences</span>{" "}
            <span>
              That <span>Deliver</span>
            </span>
          </Heading>
        </Content>
      </SectionWrapper>
    </Section>
  );
};

export default HeroSection;
