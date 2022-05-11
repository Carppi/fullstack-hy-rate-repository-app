import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextWhite: {
    color: theme.colors.white
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  alignCenter: {
    textAlign: 'center'
  }
});

const Text = ({ color, fontSize, fontWeight, style, textAlign, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'white' && styles.colorTextWhite,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    textAlign === 'center' && styles.alignCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;