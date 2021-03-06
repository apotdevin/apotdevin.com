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
import Image from 'next/image';

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

const StyledImage = styled.div`
  position: relative;
  margin-left: 32px;
  height: 200px;
  width: 100%;

  @media (${mediaWidths.mobile}) {
    margin-left: 0;
    margin-top: 8px;
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
          <StyledImage>
            <Image
              alt={'ThunderHub Open Source Project'}
              src={'/assets/home/ThunderHub.png'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </StyledImage>
        </ProjectsRow>
      </ProjectsStyled>
    </Section>
  );
};
