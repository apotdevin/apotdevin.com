import { StyledLink } from '../link';

type LinkProps = {
  href: string;
};

export const PostLink: React.FC<LinkProps> = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
