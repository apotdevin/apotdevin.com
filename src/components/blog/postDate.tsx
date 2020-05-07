import styled from 'styled-components';
import { format } from 'date-fns';
import { themeColors, fontColors } from '../../styles/ThemeColors';

export const StyledDate = styled.div`
  font-weight: 500;
  margin-bottom: 32px;
`;

export const PostDate: React.FC = ({ children }) => {
  if (typeof children !== 'string') {
    return null;
  }
  const formattedDate = format(new Date(children), 'MMMM dd, yyyy');
  return <StyledDate>{formattedDate}</StyledDate>;
};
