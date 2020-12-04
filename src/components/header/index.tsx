import * as React from 'react';
import { Section } from '../section';
import {
  headerBackColor,
  headerTextColor,
  linkHoverColor,
  textColor,
} from '../../styles/ThemeColors';
import styled, { css } from 'styled-components';
import { Sun, Moon } from 'react-feather';
import { useSettingsState, useSettingsDispatch } from '../../context/Settings';
import Link from 'next/link';
import useWindowScroll from '../../hooks/useWindowScroll';
import { useRouter } from 'next/router';

type Props = {
  scrolled: boolean;
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderLine = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  transition: all 0.5s;
  color: white;

  ${({ scrolled }) =>
    !scrolled &&
    css`
      color: ${textColor};
      padding: 40px 8px;
    `}
`;

const HeaderIcon = styled.div`
  cursor: pointer;
  margin-bottom: -6px;
`;

const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const HeaderLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const LinkRow = styled.div`
  display: flex;
`;

const HeaderSubLink = styled.div`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: ${linkHoverColor};
  }
`;

const VerticalLine = styled.div`
  margin: 0 16px;
`;

export const Header = () => {
  const { theme } = useSettingsState();
  const dispatch = useSettingsDispatch();

  const { pathname } = useRouter();

  const { y } = useWindowScroll();
  const scrolled = y > 0 || pathname !== '/';

  React.useEffect(() => {
    const storageTheme = localStorage.getItem('theme') || 'dark';
    if (storageTheme !== theme) {
      dispatch({ type: 'changeTheme', theme: storageTheme });
    }
  }, []);

  return (
    <StyledHeader>
      <Section
        backColor={scrolled ? headerBackColor : 'undefined'}
        textColor={headerTextColor}
      >
        <HeaderLine scrolled={scrolled}>
          <Link href={'/'}>
            <HeaderLink>
              <HeaderTitle>AP</HeaderTitle>
            </HeaderLink>
          </Link>
          <LinkRow>
            <Link href={'/blog'}>
              <HeaderSubLink>Blog</HeaderSubLink>
            </Link>
            <VerticalLine>|</VerticalLine>
            <Link href={'/info'}>
              <HeaderSubLink>Info</HeaderSubLink>
            </Link>
            <VerticalLine>|</VerticalLine>
            {theme === 'light' ? (
              <HeaderIcon
                onClick={() => dispatch({ type: 'changeTheme', theme: 'dark' })}
              >
                <Moon size={20} />
              </HeaderIcon>
            ) : (
              <HeaderIcon
                onClick={() =>
                  dispatch({ type: 'changeTheme', theme: 'light' })
                }
              >
                <Sun size={20} />
              </HeaderIcon>
            )}
          </LinkRow>
        </HeaderLine>
      </Section>
    </StyledHeader>
  );
};
