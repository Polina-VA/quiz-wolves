import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (

    <div className='homeContainer'>
        <div className='homeHead'>Добро пожаловать на нашу игру</div>
        <img className='homeImg' src="https://i.pinimg.com/originals/ef/c7/42/efc742d45f94803d58c53b365476bb56.gif" alt="Добро пожаловать" />
        <Link to={'/themes'}><button className='button'>Начать игру</button></Link>
    </div>
  )
  }


export default HomePage