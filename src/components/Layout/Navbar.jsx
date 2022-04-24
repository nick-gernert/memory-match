import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-violet-600 text-gray-100 h-20 text-3xl flex">
      <nav className="container mx-auto px-4 flex my-auto">
        <h1>Miss Hall's Smarties</h1>
        <span className="ml-auto">
          <Link to="/" className="mr-8">Home</Link>
          <Link to="/about">About</Link>
        </span>
      </nav>
    </header>
  )
}

export default Navbar
