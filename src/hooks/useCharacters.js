import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const useCharacters = () => {
  return useQuery(GET_CHARACTERS);
};

export default useCharacters;
