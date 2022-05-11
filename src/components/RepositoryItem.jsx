import { Image, StyleSheet, View } from 'react-native';
import theme from '../theme';
import Subheading from './Subheading';
import Text from './Text'
import RepositoryNumberElement from './RepositoryNumberElement';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.white
  },
  justified: {
    justifyContent: 'space-evenly'
  },
  containerWrap: {
    flexWrap: 'wrap',
  },
  flexItem: {
    paddingBottom: theme.paddings.basic,
    paddingHorizontal: theme.paddings.basic,
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 2,
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
    padding: theme.paddings.basic,
    borderRadius: theme.borders.borderRadius
  }
});

const RepositoryItem = ({repo}) => {

  const evenContainerStyle = [
    styles.container,
    styles.justified,
    styles.containerWrap
  ]

  const flexItemShrinkStyle = [
    styles.flexItem,
    styles.flexShrink
  ]
  
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: repo.ownerAvatarUrl
          }}
          style={styles.avatar}
        />
        <View style={flexItemShrinkStyle}>
          <Subheading fontWeight="bold" style={styles.flexItem}>
            {repo.fullName}
          </Subheading>
          <Text color="textSecondary" style={styles.flexItem}>
            {repo.description}
          </Text>
          <View style={styles.languageTag}>
            <Text color="white">
              {repo.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={evenContainerStyle}>
        <RepositoryNumberElement flexStyle={styles.flexItem} text='Stars' number={repo.stargazersCount}/>
        <RepositoryNumberElement flexStyle={styles.flexItem} text='Forks' number={repo.forksCount}/>
        <RepositoryNumberElement flexStyle={styles.flexItem} text='Reviews' number={repo.reviewCount}/>
        <RepositoryNumberElement flexStyle={styles.flexItem} text='Rating' number={repo.ratingAverage}/>
      </View>
    </View>
  );
};

export default RepositoryItem;