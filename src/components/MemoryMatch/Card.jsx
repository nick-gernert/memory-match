import React from 'react'
import './Card.css'

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (disabled) return

    handleChoice(card)
  }

  return (
    <div className="card h-48 w-40">
      <div className={flipped ? 'flipped' : ''}>
        <div className="front relative bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 border-4 rounded">
          <div className="absolute">
            {card.whatItIs}
            {card.author}
          </div>
          <img className="object-contain h-48 w-40 min-h-0" src={card.src} alt={card.whatItIs} />
        </div>
        <img
          className="back object-cover cursor-pointer min-h-0 h-48 w-40 hover:shadow-2xl hover:scale-105 border-4 rounded"
          onClick={handleClick}
          src="img/back.jpeg"
        />
      </div>
    </div>
  )
}

export default Card
