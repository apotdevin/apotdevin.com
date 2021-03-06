import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';

export const PostTitle = styled.h1`
  line-height: 120%;
  font-size: 56px;
  margin: 56px 0;
  font-weight: 900;

  @media (${mediaWidths.mobile}) {
    font-size: 36px;
    margin: 36px 0;
  }
`;
