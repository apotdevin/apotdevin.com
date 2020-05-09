import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import {
  Paragraph,
  SectionTitle,
  SmallHighlight,
} from '../../components/typography';
import { techCardHoverColor, techCardColor } from '../../styles/ThemeColors';

const TechStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechCardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
  max-width: 720px;
`;

export const TechCards = styled.a`
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${techCardColor};
  color: white;
  padding: 8px 16px;
  margin: 8px;

  :hover {
    background-color: ${techCardHoverColor};
  }
`;

export const Tech = () => {
  return (
    <Section>
      <TechStyled>
        <SectionTitle>
          <SmallHighlight>Tech</SmallHighlight>
        </SectionTitle>
        <Paragraph>
          Here is a list of current tech that interest me and that I use on a
          day-to-day basis.
        </Paragraph>
        <TechCardBox>
          <TechCards href={'https://nodejs.org/en/'}>NodeJS</TechCards>
          <TechCards href={'https://graphql.org/'}>GraphQL</TechCards>
          <TechCards href={'https://reactjs.org/'}>ReactJS</TechCards>
          <TechCards href={'https://nextjs.org/'}>NextJS</TechCards>
          <TechCards href={'https://styled-components.com/'}>
            Styled Components
          </TechCards>
          <TechCards href={'https://www.react-spring.io/'}>
            React-Spring
          </TechCards>
          <TechCards href={'https://github.com/lightningnetwork/lnd'}>
            LND
          </TechCards>
          <TechCards href={'https://www.docker.com/'}>Docker</TechCards>
          <TechCards href={'https://www.apollographql.com/'}>Apollo</TechCards>
          <TechCards href={'https://storybook.js.org/'}>Storybook</TechCards>
          <TechCards href={'https://developer.mozilla.org/en-US/docs/Web/HTML'}>
            HTML
          </TechCards>
          <TechCards href={'https://developer.mozilla.org/en-US/docs/Web/CSS'}>
            CSS
          </TechCards>
        </TechCardBox>
      </TechStyled>
    </Section>
  );
};
