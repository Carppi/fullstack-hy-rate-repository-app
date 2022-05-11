import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borders.borderRadius,
    margin: theme.paddings.basic,
    padding: theme.paddings.container,
    paddingVertical: theme.paddings.loginVertical,
    borderColor: theme.colors.textSecondary,
    borderWidth: 2,
    color: theme.colors.textSecondary
  }
});

const TextInput = ({ style, /* error, */ ...props }) => {
  const textInputStyle = [
    style,
    styles.container
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;