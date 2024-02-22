import React from 'react'
import { statCodeName } from '../data/mock'
import CharacterStat from './CharacterStat'

const CharacterCard = ({ characterData, selectedColor, addCharToParty }) => {
  return (
    <div className="flex justify-center" onClick={() => addCharToParty(characterData)}>
        <div className="w-full rounded-3xl inline-block overflow-hidden shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
        <div className="relative group w-full overflow-hidden bg-white rounded-t-3xl">
            <img src={characterData.image} className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" />
        </div>
        <div className={`${selectedColor(characterData.class)}`}>
            <div className="text-center px-3 py-2">
                <h1 className="font-bold text-2xl mb-2">{characterData.class.toUpperCase()}</h1>
            </div>
            <div className="flex justify-center pb-3 text-sm">
                {Object.entries(statCodeName).map(([name, code]) =>
                    (name !== "class" || name !== "image") && (
                    <CharacterStat key={name} statName={code} value={characterData[name]} />
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default CharacterCard
