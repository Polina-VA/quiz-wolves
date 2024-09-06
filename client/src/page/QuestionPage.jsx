import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiAxiosInstance from '../services/apiAxiosInstance';

function QuestionPage({ questions}) {
   const { questionId} = useParams

  const [questionsByThemeId, setQuestionsByThemeId] = useState([])

   const [statusOfQuestion, setStatusOfQuestion] = useState(false);
   const [answer, setAnswer] = useState("");
   const navigate = useNavigate();
  
  
console.log(questionsByThemeId);
  //  const onHandleGetQuestion = async (questionId) => {
  //   try {
  //     const { data } = await apiAxiosInstance.get(`/questions/${questionId}`);

  //     //setQuestions([...data.questions]);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleAnswerChange = (event) => {
    event.preventDefault();
    setAnswer(event.target.value);
  };

  useEffect(() => {
    // setQuestionsByThemeId(questions.filter((que) => que.theme_id === themeId))
  }, [])

  return (
    <div className='questionContainer'>
     <img className="img" src={questionsByThemeId[questionId]?.image} />
        <div>{questionsByThemeId[questionId]?.question}</div>
        <input
          onChange={handleAnswerChange}
          className="input"
          placeholder="Каков ваш ответ?"
        />
        <button
          className="btn"
          onClick={(event) => {
            if (answer === questionsByThemeId[questionId]?.answer) {
              event.preventDefault();
              questionId += 1);
              alert("правильно!");
            } else {
              alert("Ты ошибся");
            }
          }}
        >
          Проверить
        </button>
        <button
          className="btn"
          onClick={() => {
            if (currentQuestion < questionsByThemeId.length - 1) {
              setCurrentQuestion((prev) => prev + 1);
            } else {
              navigate("/Menu");
            }
          }}

        >
          Вперед
        </button>
    </div>
  )
}

export default QuestionPage