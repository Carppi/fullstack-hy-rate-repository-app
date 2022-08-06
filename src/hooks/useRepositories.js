import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  console.log(`data: ${data}, loading: ${loading}, error: ${error}`)

  if(loading) {
    console.log(`loading: ${loading}`)
    return {repositories: data, loading, error}
  }

  return { repositories: data.repositories, loading, error };
};

export default useRepositories;