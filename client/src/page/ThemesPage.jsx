import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiAxiosInstance from '../services/apiAxiosInstance';

function ThemesPage({themes, getQuestionId}) {
  //const [firstQuestion, setFirstQuestion] = useState({})



  return (
    <>
      <div className='themesContainer'>
        <div className='themesHeader'>Выбери тему для игры:</div>
        {
          themes && themes.map((theme) => (
            <div key={theme.id} className='themeCard'>
              <img src={theme.image} alt="Картинка темы" className='themeImg'/>
            <Link  to={`/themes/${theme.id}/questions/${getQuestionId(theme.id)}`}>
          <div className="themeBtn"><p>{theme.title}</p></div>
          </Link>
          </div>
          ))
        }
        </div>
    </>

  )
}

export default ThemesPage