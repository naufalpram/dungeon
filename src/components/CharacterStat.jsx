const CharacterStat = ({ statName, value }) => (
    <div className="text-center px-1 border-r last:border-r-0">
        <h2>{statName.toUpperCase()}</h2>
        <span>{value}</span>
    </div>
  )

export default CharacterStat;