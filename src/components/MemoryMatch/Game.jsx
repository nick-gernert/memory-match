import React from 'react'
import Card from './Card'
import Celebrate from './Celebrate'
import Score from './Score'

const Game = () => {
  const cards = Array(40).fill(<Card />)

  return (
    <div className="p-4 flex flex-wrap gap-4">
      {cards}
      <Score />
    </div>
  )
}

export default Game
