import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
});

const AppBarTab = ( {text, link} ) => {
  return(
    <View style={styles.tab}>
      <Pressable>
        <Link to={link}>
          <Text color='white' fontWeight='bold'>{text}</Text>
        </Link>
      </Pressable>
    </View>
  )
};

export default AppBarTab;