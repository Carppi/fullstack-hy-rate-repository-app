import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
});

const AppBarTab = ( {text} ) => {
  return(
    <View style={styles.tab}>
      <Pressable>
        <Text color='white' fontWeight='bold'>{text}</Text>
      </Pressable>
    </View>
  )
};

export default AppBarTab;