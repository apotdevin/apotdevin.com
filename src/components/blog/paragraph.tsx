import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';

export const PostParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  line-height: 170%;
  font-size: 18px;
  margin-bottom: 32px;

  @media (${mediaWidths.mobile}) {
    line-height: 150%;
  }
`;
