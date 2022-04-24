import Game from './Game'

const MemoryMatch = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl text-center">Play Memory Match</h2>
      <p className="mt-2 text-sm text-center">Match 2 cards to get a point. Match all cards to get a prize!</p>
      <Game />
    </div>
  )
}

export default MemoryMatch
