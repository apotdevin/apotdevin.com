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
            7ac893d49d372db09d8497d571915301416d6e1d
          </StyledLink>
        </Paragraph>
      </PGPStyled>
    </Section>
  );
};
