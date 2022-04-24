import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button className="text-2xl border-4 py-4 px-8 transition-all hover:scale-105 hover:shadow bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" onClick={onClick}>{children}</button>
  )
}

export default Button
