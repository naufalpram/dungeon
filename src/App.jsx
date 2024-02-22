/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import './App.css';
import { character as chars, stage as stages } from './data/mock';
import CharacterCard from './components/CharacterCard';
import StageResult from './components/StageResult';

function App() {
  const [chosenChars, setChosenChars] = useState([]);
  
  const selectedColor = (className) => {
    return chosenChars.filter(char => char.class === className).length > 0 ?
      "bg-blue-900 text-white" : "bg-white";
  };

  const addCharToParty = (char) => {
    const findChar = chosenChars.filter(item => item.class === char.class);
    if (findChar.length > 0) {
      setChosenChars(chosenChars.filter(item => item.class !== char.class));
    } else {
      if (chosenChars.length === 4) {
        chosenChars.shift();
      }
      setChosenChars([...chosenChars, char]);
    }
  }
  
  return (
    <div className='my-14'>
      <header>
        <h1 className="text-6xl text-center my-12">DUNGEON PARTY</h1>
      </header>
      <div className='flex flex-wrap gap-6 justify-center'>
      {chars.map(character => (
        <CharacterCard
          key={character.class}
          characterData={character}
          selectedColor={selectedColor}
          addCharToParty={addCharToParty}
        />
      ))}
      </div>
      <div className="flex justify-center my-8">
        <StageResult chars={chosenChars} />
      </div>
    </div>
  )
}

export default App;
