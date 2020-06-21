import styled, { ThemeSet } from 'styled-components';
import { textColor } from '../../styles/ThemeColors';

interface SeparationProps {
  height?: number;
  lineColor?: string | ThemeSet;
}

export const Separation = styled.div<SeparationProps>`
  height: ${({ height }) => (height ? height : '1')}px;
  background-color: ${({ lineColor }) => lineColor ?? textColor};
  width: 100%;
  margin: 16px 0;
`;
