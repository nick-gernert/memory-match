import { useState, useEffect } from 'react'
import Card from './Card'
import Celebrate from './Celebrate'
import Score from './Score'
import Button from '../UI/Button'

const DEFAULT_CARDS = [
  { src: 'img/peep.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/ice-cream.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/bog.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/creeper.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/dogfin.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  // { src: 'img/mean-cat.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/minecraft-dog.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/minecraft-pokemon.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/minecraft.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/pokemon-city.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/rocket.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/unicorn-dragon-puppy.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/unidog.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },
  { src: 'img/amazing-flowers.png', author: 'Katelynn', whatItIs: 'Butterfly', matched: false },

  // { src: 'img/hairy.svg', author: 'Audrey', whatItIs: 'Hairy Guinea Pig', matched: false },
  // { src: 'img/max.svg', author: 'Audrey', whatItIs: 'Max Guinea Pig', matched: false },
  // { src: 'img/white-with-brown.svg', author: 'Audrey', whatItIs: 'White and Brown Guinea Pig', matched: false },
]

const Game = () => {
  const [cards, setCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [gameOver, setGameOver] = useState(false)

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

  useEffect(() => {
    setGameOver(cards.every((card) => card.matched))
  }, [cards])

  const shuffleCards = () => {
    const shuffledCards = [...DEFAULT_CARDS, ...DEFAULT_CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setMoves(0)
    setCards(shuffledCards)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setMoves((prevValue) => (prevValue += 1))
    setDisabled(false)
  }

  return (
    <>
      {gameOver && <Celebrate />}
      <div className="text-center my-4">
        <Button onClick={shuffleCards}>New Game</Button>
      </div>
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
      <Score moves={moves} />
    </>
  )
}

export default Game
