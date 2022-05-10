import { Image, StyleSheet, View } from 'react-native';
import theme from '../theme';
import Subheading from './Subheading';
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  flexItem: {
    paddingBottom: 5,
    paddingLeft: 10,
    flexGrow: 0,
  },
  avatar: {
    width: 66,
    height: 66,
    flexGrow: 0,
    borderRadius: theme.borders.borderRadius
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: theme.borders.borderRadius
  }
});

const RepositoryItem = ({repo}) => {
  
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: repo.ownerAvatarUrl
          }}
          style={styles.avatar}
        />
        <View>
          <View style={styles.flexItem}>
            <Subheading fontWeight="bold">{repo.fullName}</Subheading>
          </View>
          <View style={styles.flexItem}>
            <Text color="textSecondary">{repo.description}</Text>
          </View>
          <View style={styles.flexItem}>
            <View style={styles.languageTag}>
              <Text color="white">
                {repo.language}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}> 
        <Text>
          Stars: {repo.stargazersCount}{'\n'}
          Forks: {repo.forksCount}{'\n'}
          Reviews: {repo.reviewCount}{'\n'}
          Rating: {repo.ratingAverage}
        </Text>
      </View>
    </View>
  );
};

export default RepositoryItem;