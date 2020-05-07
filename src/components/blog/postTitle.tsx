import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';

export const PostTitle = styled.h1`
  line-height: 120%;
  font-size: 40px;
  margin-bottom: 16px;

  @media (${mediaWidths.mobile}) {
    font-size: 24px;
  }
`;
