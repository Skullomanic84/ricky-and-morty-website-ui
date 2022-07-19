import React from 'react'

const Character = (character) => {
  return (
    <div className='col-3 mb-4'>
      <div className='card h-100 shadow-sm'>
        <img src={character.image} 
        alt={character.name} 
        className='card-img-top'/>

        <div className='card-body text-center'>
          <h4 className='card-title'>{character.name}</h4>
          <p>
          {`Origin: ${character.origin && character.origin.name}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;