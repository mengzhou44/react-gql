import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      episode {
        episode
        name
      }
    }
  }
`;

const useCharacter = (id) => {
  return useQuery(GET_CHARACTER, {
      variables: {
          id
      }
  });
};

export default useCharacter;
