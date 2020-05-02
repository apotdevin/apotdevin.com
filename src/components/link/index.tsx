import * as React from 'react';
import RouterLink from 'next/link';
import styled from 'styled-components';
import { linkTextColor, linkHoverColor } from '../../styles/ThemeColors';

const LinkStyled = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${linkTextColor};

  :hover {
    color: ${linkHoverColor};
  }
`;

type LinkProps = {
  href?: string;
  to?: string;
};

export const StyledLink: React.FC<LinkProps> = ({ children, href, to }) => {
  if (!href && !to) return null;

  if (href) {
    return <LinkStyled href={href}>{children}</LinkStyled>;
  }

  const linkProps = {
    href: to,
  };

  return (
    <RouterLink {...linkProps}>
      <LinkStyled>{children}</LinkStyled>
    </RouterLink>
  );
};
