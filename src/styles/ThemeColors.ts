import theme from 'styled-theming';

export const themeColors = {
  white: '#fff',
  grey: '#f5f6f9',
  grey2: '#f0f2f8',
  grey3: '#e1e6ed',
  grey7: '#b0b3c7',
  grey8: '#4a5669',
  blue2: '#6284e4',
  blue3: '#5163ba',
  blue4: '#20263d',
  blue5: '#181c30',
  blue6: '#1a1f35',
  blue7: '#151727',
  black: '#0d0e17',
};

export const chartColors = {
  darkyellow: '#ffd300',
  orange: '#ffa940',
  orange2: '#FD5F00',
  lightblue: '#1890ff',
  green: '#a0d911',
  purple: '#6938f1',
  red: 'red',
};

export const fontColors = {
  white: '#fff',
  grey3: '#e1e6ed',
  grey4: '#6e7887',
  grey5: '#5e6575',
  grey6: '#667587',
  grey7: '#b0b3c7',
  grey8: '#4a5669',
  blue: '#ccd0e7',
  blue1: '#9197b9',
  blue2: '#6284e4',
  blue3: '#5163ba',
  black: '#212735',
};

export const mediaDimensions = {
  mobile: 700,
};
export const mediaWidths = {
  mobile: `max-width: ${mediaDimensions.mobile}px`,
};

export const backgroundColor = theme('mode', {
  light: themeColors.grey,
  dark: themeColors.blue7,
});

export const textColor = theme('mode', {
  light: 'black',
  dark: 'white',
});

export const inverseTextColor = theme('mode', {
  light: 'white',
  dark: 'black',
});

export const headerBackColor = theme('mode', {
  light: themeColors.blue7,
  dark: themeColors.black,
});

export const headerTextColor = theme('mode', {
  light: 'white',
  dark: 'white',
});

export const highlightTopColor = theme('mode', {
  light: 'rgb(255, 246, 0, 0.7)',
  dark: themeColors.blue2,
});

export const highlightBottomColor = theme('mode', {
  light: 'rgb(255, 210, 0, 0.6)',
  dark: themeColors.blue2,
});

export const linkTextColor = theme('mode', {
  light: themeColors.blue3,
  dark: '#ffa940',
});

export const linkHoverColor = theme('mode', {
  light: themeColors.blue2,
  dark: '#ffd300',
});

export const techCardColor = theme('mode', {
  light: themeColors.blue2,
  dark: '#e6932d',
});

export const techCardHoverColor = theme('mode', {
  light: themeColors.blue3,
  dark: '#ffd300',
});

export const contactCardColor = theme('mode', {
  light: themeColors.blue2,
  dark: '#ffd300',
});
