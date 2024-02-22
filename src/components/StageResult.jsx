import React, { useEffect, useState } from 'react'
import { stage as stages } from '../data/mock';

const StageResult = ({ chars }) => {
  
  const calculateStats = () => {
    if (chars.length !== 4) return;

    const stats = {
      attack: 0,
      defense: 0,
      agility: 0,
      accuracy: 0,
      utility: 0
    }
    chars.forEach(character => {
        stats.attack += character.attack;
        stats.defense += character.defense;
        stats.agility += character.agility;
        stats.accuracy += character.accuracy;
        stats.utility += character.utility;
    });
    return stats;
  }

  const checkStage = () => {
    if (chars.length !== 4) return [];
    
    const totalStats = calculateStats();
    const victoryStages = [];
    for (let item of stages) {
      if (
        (item.minimum_stats.attack === null || item.minimum_stats.attack < totalStats.attack) &&
        (item.minimum_stats.defense === null ||  item.minimum_stats.defense < totalStats.defense) &&
        (item.minimum_stats.agility === null ||  item.minimum_stats.agility < totalStats.agility) &&
        (item.minimum_stats.accuracy === null ||  item.minimum_stats.accuracy < totalStats.accuracy) &&
        (item.minimum_stats.utility === null ||  item.minimum_stats.utility < totalStats.utility)
        ) {
          victoryStages.push(item.stage);
        }
    }
    return victoryStages
  }

  const concatStages = (stages = []) => {
    let str = '';
    if (stages.length === 1) return stages[0];

    if (stages.length > 1) {
      const andAdder = stages.length === 2 ? ' ': ', ';
      for (let i = 0; i < stages.length; i++) {
        if (i === stages.length - 1) str += `and ${stages[i]}`
        else str += `${stages[i]}${andAdder}`
      }
    }
  
    return str;
  }

  const CompleteParty = ({ calculateStats, checkStage }) => {
    const allStats = calculateStats();
    const allStage = checkStage();
    return (
    <span>
        Your have total stats of <br/>
        Atk {allStats.attack}, Def {allStats.defense}, Agi {allStats.agility}, Acu {allStats.accuracy}, and Uti {allStats.utility}
        {allStage.length > 0 ? (
          <p className='mt-6'>Your Party through {concatStages(allStage)}</p>) : (
          <p className='mt-6'>Your Party can't pass any stage.</p>
        )}
    </span>
  )
  }

  const IncompleteParty = () => (
    <span>
        Your Party Summary will be here! <br/>
        It will show when your party is complete
    </span>
  )

  return (
    <div className='p-8 bg-white text-2xl text-center w-3/4 rounded-3xl'>
        {chars.length === 4 ? <CompleteParty calculateStats={calculateStats} checkStage={checkStage} /> : <IncompleteParty />}
    </div>
  )
}

export default StageResult;