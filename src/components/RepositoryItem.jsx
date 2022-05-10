import { Text, View } from 'react-native';

const RepositoryItem = ({repo}) => {
  console.log(repo)
  return (
    <View>
      <Text>
        Full name: {repo.fullName}{'\n'}
        Description: {repo.description}{'\n'}
        Language: {repo.language}{'\n'}
        Stars: {repo.stargazersCount}{'\n'}
        Forks: {repo.forksCount}{'\n'}
        Reviews: {repo.reviewCount}{'\n'}
        Rating: {repo.ratingAverage}
      </Text>
    </View>
  );
};

export default RepositoryItem;