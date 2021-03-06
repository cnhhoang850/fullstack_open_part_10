import {Platform} from 'react-native';
const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
    },
    fontSizes: {
      body: 14,
      subheading: 30,
    },
    fonts: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'Sytem'
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;