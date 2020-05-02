import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { SettingsProvider, useSettingsState } from '../src/context/Settings';

const Content: React.FC = ({ children }) => {
  const { theme } = useSettingsState();

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyles />
      {children}
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
