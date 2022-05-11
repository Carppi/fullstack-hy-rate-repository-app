import Text from './Text';
import { View } from 'react-native';

const RepositoryNumberElement = ({text, number, flexStyle}) => {

  const prettifyNumber = (number) => {
    
    var result = number.toString()

    if(!isNaN(number) && number >= 1000) {
      result = (number / 1000).toFixed(1) + 'k';
    }

    return result;
  }

  return (
    <View>
      <Text style={flexStyle} textAlign='center' fontWeight="bold">{prettifyNumber(number)}</Text>
      <Text style={flexStyle} textAlign='center' color="textSecondary">{text}</Text>
    </View>
  )
};

export default RepositoryNumberElement;