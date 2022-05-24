import React from 'react';
import useCharacters from '../hooks/useCharacters';
import './CharactersList.css';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const { error, data, loading } = useCharacters();
  if (loading) return <h3>loading ... </h3>;

  if (error) return <p> {error.message} </p>;

  return (
    <div className="characters">
      {data.characters.results.map((character) => (
        <Link to={`/${character.id}`} key={character.id}>
          <img src={character.image} alt="character" />
          <h3>{character.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
