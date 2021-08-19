import {useEffect, useState} from "react";
import PokemonThumnail from './components/PokemonThumnail';

import './index.css';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next);

    const createPokemonsObjetc = result => {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        
        setAllPokemons(currentList => [...currentList, data])

        // setAllPokemons.push(data);
      })

    }
    createPokemonsObjetc(data.results);
    console.log(allPokemons);
    // console.log(data)
  }

  useEffect(() => {
    getAllPokemons()
  }, []);

  return (
    <div className="app-contanier">
      <h1>Pokemon Evolution </h1>
      <div className = "pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, id) => 
            <PokemonThumnail 
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={id}
            />
          )}
        </div>
        <button className="load-more" onClick = {() => getAllPokemons()} >Cargar Más</button>
      </div>
    </div>
  );
}

export default App;