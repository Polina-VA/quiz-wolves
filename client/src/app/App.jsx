import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../widgets/Footer";
import HomePage from "../page/HomePage";
import ThemesPage from "../page/ThemesPage";
import apiAxiosInstance from "../services/apiAxiosInstance";
import ErrorPage from "../page/ErrorPage";
import QuestionPage from "../page/QuestionPage";

function App() {
  const [themes, setThemes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestionId] = useState(1);


  const onHandleGetAllThemes = async () => {
    try {
      const { data } = await apiAxiosInstance.get("/themes");
     // console.log(data);
      if (data.message === "success") {
        setThemes([...data.themes]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleGetAllQuestions = async () => {
    try {
      const { data } = await apiAxiosInstance.get(`/questions`);
      setQuestions([...data.questions]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getQuestionId = (themeId) => {
    const questionsByThemeId = questions.filter((que) => que.theme_id === themeId)
    setQuestionId(questionsByThemeId[0].id) 
    return questionId
  }



  useEffect(() => {
    onHandleGetAllThemes();
    onHandleGetAllQuestions()
  }, []);

  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/themes"
          element={<ThemesPage themes={themes} getQuestionId={getQuestionId} />}
        />

        <Route
        path={'/questions/${questionId}'}
          element={
            <QuestionPage
              questions={questions} setQuestions={setQuestions} getQuestionId={getQuestionId}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
