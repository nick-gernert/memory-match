import React from 'react'

const Score = ({ turns }) => {
  return (
    <div className="text-center text-5xl">
      Score: &nbsp;
      {turns}
    </div>
  )
}

export default Score
