import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import {
  Paragraph,
  SectionTitle,
  SmallHighlight,
} from '../../components/typography';
import { StyledLink } from '../../components/link';
import { mediaWidths } from '../../styles/ThemeColors';

const ProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (${mediaWidths.mobile}) {
    flex-direction: column-reverse;
  }
`;

const StyledImage = styled.img`
  max-width: 320px;
  margin-left: 32px;

  @media (${mediaWidths.mobile}) {
    margin-left: 0;
    margin-top: 8px;
    max-width: 260px;
  }
`;

export const Projects = () => {
  return (
    <Section sectionWidth={'800px'}>
      <ProjectsStyled>
        <SectionTitle>
          <SmallHighlight>Projects</SmallHighlight>
        </SectionTitle>
        <ProjectsRow>
          <div>
            <Paragraph>
              Currently my main project is
              <StyledLink href={'https://thunderhub.io'}>
                {' '}
                ThunderHub
              </StyledLink>{' '}
              an open-source Lightning Network{' '}
              <StyledLink href={'https://github.com/lightningnetwork/lnd'}>
                LND
              </StyledLink>{' '}
              node manager. The project is based on <b>React</b>, <b>NextJS</b>{' '}
              and <b>GraphQL</b> and gives you an interface to manage your
              bitcoin/lightning accounts.
            </Paragraph>
            <Paragraph>
              <b> Bitcoin </b> gives you a Swiss bank account in your pocket and
              the Lightning Network gives you instant transactions. ThunderHub
              gives you a great UI to manage them both.
            </Paragraph>
          </div>
          <StyledImage src={'/assets/home/ThunderHub.png'} />
        </ProjectsRow>
      </ProjectsStyled>
    </Section>
  );
};
