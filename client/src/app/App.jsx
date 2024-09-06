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

  const onHandleGetAllThemes = async () => {
    try {
      const { data } = await apiAxiosInstance.get("/themes");
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
  };

  useEffect(() => {
    onHandleGetAllThemes();
    onHandleGetAllQuestions();

  }, []);

  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/themes"

          element={<ThemesPage themes={themes} setQuestions={setQuestions} questions={questions}/>}
        />

        <Route
          path={"/themes/:themeId/questions/:questionId"}
          element={
            <QuestionPage questions={questions} setQuestions={setQuestions} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
