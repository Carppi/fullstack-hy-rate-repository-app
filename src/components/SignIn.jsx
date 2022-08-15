import Text from './Text';
import theme from '../theme';

import * as yup from 'yup';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';

import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    padding: theme.paddings.container,
    paddingVertical: theme.paddings.loginVertical,
    backgroundColor: theme.colors.white
  },
  blueBox: {
    backgroundColor: theme.colors.primary,
    padding: theme.paddings.container,
    paddingVertical: theme.paddings.loginVertical,
    margin: theme.paddings.basic,
    borderRadius: theme.borders.borderRadius,
  }
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username"/>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <Pressable onPress={onSubmit} style={styles.blueBox}>
        <Text textAlign="center" color="white" fontWeight="bold">Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log("trying to log data")
      console.log("Auth data on next line:");
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;