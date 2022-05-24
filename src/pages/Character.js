import React from 'react';
import { useParams } from 'react-router';
import useCharacter from '../hooks/useCharacter';
import './Character.css';

const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);
  if (loading) return <h3>loading ... </h3>;

  if (error) return <p> {error.message} </p>;

  return (
    <div className="character">
      <img
        src={data.character.image}
        alt="character"
        width={750}
        height={750}
      />
      <div className="character-content">
        <h3>{data.character.name}</h3>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode} </b>{' '}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
