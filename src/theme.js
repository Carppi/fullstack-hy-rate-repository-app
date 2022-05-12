import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    white: '#ffffff',
    primary: '#0366d6',
    backgroundBar: '#24292e',
    backgroundMain: '#e1e4e8',
    errorRed: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borders: {
    borderRadius: 5
  },
  paddings: {
    basic: 5,
    container: 10,
    loginVertical: 15
  }
};

export default theme;