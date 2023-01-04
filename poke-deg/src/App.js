import './App.css';
import React, { useState } from 'react';

function App() {

  const [nome, setNome] = useState("bulbasaur");
  const [id, setId] = useState(1);
  const [sprite, setSprite] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");

  function onSubmit(e) {
    e.preventDefault();

      fetch("https://pokeapi.co/api/v2/pokemon/" + e.target[0].value)
      .then(retprne => retprne.json())
      .then(retprne => {
        setNome(retprne.name)
        setId(retprne.id)
        setSprite(retprne.sprites.other.dream_world.front_default)
      });

  }

  return (
    <div className="App">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <form onSubmit={onSubmit} className="form-inline">
            <input type="text" className="form-group mx-sm-3 mb-2" placeholder="ID ou Nome"/>
            <button type="submit" className="btn btn-primary mb-2">Consultar</button>
          </form>
          <h5 className="card-title">{id} - {nome}</h5>
        </div>
        <img className="card-img-top" src={sprite} alt="Card image cap"/>
      </div>
    </div>
  );
}

export default App;
