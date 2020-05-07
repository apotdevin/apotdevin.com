import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';

type SpacerProps = {
  amount?: string;
  mobileAmount?: string;
};

export const Spacer = styled.div<SpacerProps>`
  width: 100%;
  height: ${({ amount }) => amount || '60px'};

  @media (${mediaWidths.mobile}) {
    height: ${({ mobileAmount }) => mobileAmount || '32px'};
  }
`;
