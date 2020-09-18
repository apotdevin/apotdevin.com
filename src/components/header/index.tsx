import * as React from 'react';
import { Section } from '../section';
import { headerBackColor, headerTextColor } from '../../styles/ThemeColors';
import styled from 'styled-components';
import { Sun, Moon } from 'react-feather';
import { useSettingsState, useSettingsDispatch } from '../../context/Settings';
import Link from 'next/link';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
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

export const Header = () => {
  const { theme } = useSettingsState();
  const dispatch = useSettingsDispatch();

  React.useEffect(() => {
    const storageTheme = localStorage.getItem('theme') || 'light';
    if (storageTheme !== theme) {
      dispatch({ type: 'changeTheme', theme: storageTheme });
    }
  }, []);

  return (
    <StyledHeader>
      <Section backColor={headerBackColor} textColor={headerTextColor}>
        <HeaderLine>
          <Link href={'/'}>
            <HeaderLink>
              <HeaderTitle>AP</HeaderTitle>
            </HeaderLink>
          </Link>
          {theme === 'light' ? (
            <HeaderIcon
              onClick={() => dispatch({ type: 'changeTheme', theme: 'dark' })}
            >
              <Moon size={20} />
            </HeaderIcon>
          ) : (
            <HeaderIcon
              onClick={() => dispatch({ type: 'changeTheme', theme: 'light' })}
            >
              <Sun size={20} />
            </HeaderIcon>
          )}
        </HeaderLine>
      </Section>
    </StyledHeader>
  );
};
