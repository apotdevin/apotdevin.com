import styled from 'styled-components';
import { mediaWidths } from '../../styles/ThemeColors';

const StyledListItem = styled.li`
  font-family: 'Inter', sans-serif;
  line-height: 170%;
  font-size: 20px;

  @media (${mediaWidths.mobile}) {
    line-height: 150%;
  }
`;

export const PostListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};
