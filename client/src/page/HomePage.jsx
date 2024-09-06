import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
        <div>Добро пожаловать на нашу игру</div>
        <img src="https://i.pinimg.com/originals/ef/c7/42/efc742d45f94803d58c53b365476bb56.gif" alt="Добро пожаловать" />
        <Link to={'/themes'}><button>Начать игру</button></Link>
    </>
  )
}

export default HomePage