import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { SettingsProvider, useSettingsState } from '../src/context/Settings';
import { mediaWidths } from '../src/styles/ThemeColors';
import { Header } from '../src/components/header';
import { Footer } from '../src/components/footer';

export const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const HeaderBodyWrapper = styled.div`
  padding-bottom: 160px;

  @media (${mediaWidths.mobile}) {
    padding-bottom: 320px;
  }
`;

const Content: React.FC = ({ children }) => {
  const { theme } = useSettingsState();

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyles />
      <PageWrapper>
        <HeaderBodyWrapper>
          <Header />
          {children}
        </HeaderBodyWrapper>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <Content>
        <Component {...pageProps} />
      </Content>
    </SettingsProvider>
  );
}
