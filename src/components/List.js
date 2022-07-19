import React, {  useEffect, useState } from 'react'
//component import
import Character from './Character';

const List = () => {

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters]= useState([]);

  //clean-up

  useEffect(() => {
    async function fetchData () {
      const data = await fetch (
        'https://rickandmortyapi.com/api/character' 
      );

      const { results } = await data.json();

      setCharacters(results);
      setLoading(false);

    }
  
    fetchData();
    
  }, [characters.length]) ;
  
  return (
    <div>
        <h2 className='m-5 text-center'>Characters</h2>
        <div className='row'>
          {loading ? (
            <div>Loading....</div>
          ) : (characters.map((character) => (
            <Character
            key={character.id}
            name={character.name}
            origin={character.origin}
            image={character.image}
            />
          ))
          )}
      </div>
    </div>

  );
}

export default List;