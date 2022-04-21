import React from "react";
import styled from "styled-components";
import { Heading2, Section } from "../styles/shared";
import dataArr from "../data.json";
import Card from "../components/Card";
import media from "../styles/media";
import Button from "../components/Button";

const SectionEl = styled(Section)`
  padding-block: 3rem 10rem;
  ${media.tablet} {
    padding-block: 3rem;
  }

  ${media.laptop} {
    padding-block: 5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;

  ${media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin-bottom: 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;
const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  gap: 2.8rem;
  width: 100%;

  ${media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
  }

  ${media.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2.4rem;
  }
`;

const SectionFooter = styled.div`
  text-align: center;
  margin-top: 3.4rem;

  ${media.tablet} {
    display: none;
  }
`;

const SectionTwo = () => {
  return (
    <SectionEl>
      <SectionHeader>
        <Heading2>Our creations</Heading2>
        <ButtonWrapper>
          <Button />
        </ButtonWrapper>
      </SectionHeader>
      <Grid>
        {dataArr.map((data) => (
          <Card key="data.image" data={data} />
        ))}
      </Grid>

      <SectionFooter>
        <Button />
      </SectionFooter>
    </SectionEl>
  );
};

export default SectionTwo;
