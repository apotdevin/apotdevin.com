import styled from 'styled-components';
import { format } from 'date-fns';
import { themeColors, fontColors } from '../../styles/ThemeColors';

type StyledProps = {
  bottomMargin?: string;
};

export const StyledDate = styled.div<StyledProps>`
  font-weight: 500;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || '32px'};
`;

type PostDateType = {
  date: string;
  text?: string;
  bottomMargin?: string;
};

export const PostDate: React.FC<PostDateType> = ({
  text = '',
  date,
  bottomMargin,
}) => {
  if (typeof date !== 'string') {
    return null;
  }
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  return (
    <StyledDate
      bottomMargin={bottomMargin}
    >{`${text}${formattedDate}`}</StyledDate>
  );
};
