import { useState } from 'react';
import React from 'react';

import { useLazyQuery, gql } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query GetcharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState('');

  const [getLocations, { error, loading, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading ... </div>}
      {error && <div>Something went wrong! </div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
