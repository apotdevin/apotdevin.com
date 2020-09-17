import * as React from 'react';
import { Section } from '../section';
import {
  headerBackColor,
  headerTextColor,
  mediaWidths,
} from '../../styles/ThemeColors';
import styled from 'styled-components';
import { Emoji } from '../emoji';
import { GitHub } from 'react-feather';
import { StyledLink } from '../link';

const FooterStyle = styled.div`
  padding: 32px 0;
  min-height: 160px;

  @media (${mediaWidths.mobile}) {
    padding: 32px;
    min-height: 320px;
  }
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${mediaWidths.mobile}) {
    flex-direction: column;
  }
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.div`
  max-width: 400px;
  line-height: 150%;
  margin-right: 32px;

  @media (${mediaWidths.mobile}) {
    margin-right: 0;
    text-align: center;
    padding-bottom: 16px;
    max-width: 100%;
  }
`;

const FooterTextRight = styled.div`
  text-align: right;
  max-width: 400px;
  line-height: 150%;

  @media (${mediaWidths.mobile}) {
    text-align: center;
    max-width: 100%;
  }
`;

const IconPadding = styled.span`
  margin-right: 4px;
`;

const Ending = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 24px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Section backColor={headerBackColor} textColor={headerTextColor}>
        <FooterStyle>
          <FooterRow>
            <FooterText>
              Welcome to my personal website. I'm Anthony and I'm a React
              developer with great interest in Bitcoin.
            </FooterText>
            <FooterTextRight>
              Made in Munich with <Emoji symbol={'❤'} label={'love'} />, React
              and NextJS
              <div>
                <StyledLink href={'https://github.com/apotdevin/apotdevin.com'}>
                  <IconPadding>
                    <GitHub size={16} />
                  </IconPadding>
                  Check out the source code on Github
                </StyledLink>
              </div>
            </FooterTextRight>
          </FooterRow>
          <Ending>Munich, 2020</Ending>
        </FooterStyle>
      </Section>
    </FooterWrapper>
  );
};
