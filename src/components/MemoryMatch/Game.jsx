import { useState, useEffect } from 'react'
import Card from './Card'
import Celebrate from './Celebrate'
import Score from './Score'
import Button from '../UI/Button'

const DEFAULT_CARDS = [
  { src: 'img/butterfly.svg', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/hairy.svg', author: 'Audrey', whatItIs: 'Hairy Guinea Pig', matched: false },
  { src: 'img/max.svg', author: 'Audrey', whatItIs: 'Max Guinea Pig', matched: false },
  { src: 'img/white-with-brown.svg', author: 'Audrey', whatItIs: 'White and Brown Guinea Pig', matched: false },
]

const Game = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevValue) =>
          [...prevValue].map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            }
            return card
          }),
        )
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  const shuffleCards = () => {
    const shuffledCards = [...DEFAULT_CARDS, ...DEFAULT_CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevValue) => (prevValue += 1))
    setDisabled(false)
  }

  return (
    <>
      <Button onClick={shuffleCards}>New Game</Button>
      <div className="p-4 flex flex-wrap gap-4">
        {cards.map((card) => (
          <Card
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            key={card.id}
          />
        ))}
      </div>
      <Score turns={turns} />
    </>
  )
}

export default Game
