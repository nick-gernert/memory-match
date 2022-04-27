import React from 'react'

const Score = ({ moves }) => {
  return (
    <div className="text-center text-5xl">
      Moves: &nbsp;
      {moves}
    </div>
  )
}

export default Score
