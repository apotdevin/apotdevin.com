import styled from 'styled-components';

const StyledH1 = styled.h1``;
const StyledH2 = styled.h2`
  font-size: 32px;
`;
const StyledH3 = styled.h3`
  font-size: 24px;
`;
const StyledH4 = styled.h4`
  font-size: 22px;
`;

export const PostHeading = ({ level, children }) => {
  switch (level) {
    case 1:
      return <StyledH1>{children}</StyledH1>;
    case 2:
      return <StyledH2>{children}</StyledH2>;
    case 3:
      return <StyledH3>{children}</StyledH3>;
    default:
      return <StyledH4>{children}</StyledH4>;
  }
};
