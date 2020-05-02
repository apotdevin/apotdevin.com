import * as React from 'react';
import styled, { ThemeSet } from 'styled-components';
import {
  backgroundColor,
  textColor as themeTextColor,
} from '../../styles/ThemeColors';

type WrapperProps = {
  backColor?: string | ThemeSet;
  textColor?: string | ThemeSet;
};

const SectionWrapper = styled.div<WrapperProps>`
  width: 100%;
  background: ${({ backColor }) => backColor || backgroundColor};
  color: ${({ textColor }) => textColor || themeTextColor};
`;

const StyledSection = styled.div`
  max-width: 900px;
  margin: 0 auto 0 auto;

  @media (max-width: 1035px) {
    padding: 0 16px;
  }
`;

export const Section: React.FC<WrapperProps> = ({ children, ...props }) => {
  return (
    <SectionWrapper {...props}>
      <StyledSection>{children}</StyledSection>
    </SectionWrapper>
  );
};
