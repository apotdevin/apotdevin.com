import * as React from 'react';
import { Section } from '../../components/section';
import styled from 'styled-components';
import {
  Paragraph,
  SectionTitle,
  SmallHighlight,
} from '../../components/typography';
import { StyledLink } from '../../components/link';

const PGPStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PGP = () => {
  return (
    <Section>
      <PGPStyled>
        <SectionTitle>
          <SmallHighlight>PGP</SmallHighlight>
        </SectionTitle>
        <Paragraph>
          <StyledLink href={'/publicKey.txt'}>
            3C8A 01A8 344B 66E7 875C E553 4403 F1DF BE77 9457
          </StyledLink>
        </Paragraph>
      </PGPStyled>
    </Section>
  );
};
