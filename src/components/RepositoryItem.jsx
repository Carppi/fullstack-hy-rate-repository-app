import { View } from 'react-native';
import Text from './Text'

const RepositoryItem = ({repo}) => {
  
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