import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function QuestionPage({ questions }) {
  const { themeId, questionId } = useParams();

  const [statusOfQuestion, setStatusOfQuestion] = useState(false);
  console.log(statusOfQuestion);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  //const [themeQuestions, setThemeQuestions ] = us

  //const queArr = questions.filter((quest) => quest.title_id === themeId)

  const handleAnswerChange = (event) => {
    event.preventDefault();
    setAnswer(event.target.value);
  };
  const question = questions.find(
    (que) => que.theme_id === +themeId && que.id === +questionId
  );
  console.log(question);
  return (
    <>
      {question && question ? (
        <div className="questionContainer">
          <img className="img" src={question?.image} />
          <div>{question?.question}</div>
          <input
            onChange={handleAnswerChange}
            className="input"
            value={answer}
            placeholder="Каков ваш ответ?"
          />
          {statusOfQuestion ? <div>Правильно!</div> : <div>Неa, не угадал</div>}
          <button
            className="btn"
            onClick={(event) => {
              if (answer === question?.answer) {
                event.preventDefault();
                setStatusOfQuestion(true);
              } else {
                setStatusOfQuestion(false);
              }
            }}
          >
            Проверить
          </button>
          <button
            onClick={() =>
              navigate(`/themes/${themeId}/questions/${+questionId + 1}`)
            }
            className="btn"
          >
            {/* if (questionId < queArr.length - 1) {
              navigate(`/themes/${themeId}/questions/${+questionId + 1}`)
            } else {
              navigate("/Menu");
            } */}
            Вперед
          </button>
        </div>
      ) : (
        <button onClick={() => navigate(`/themes`)} className="btn">
          Вернуться в меню
        </button>
      )}
    </>
  );
}

export default QuestionPage;
