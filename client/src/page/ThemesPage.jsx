import React from "react";
import { Link } from "react-router-dom";

function ThemesPage({ themes, questions }) {
  return (
    <div className="themesContainer">
      <div className="themesHeader">Выбери тему для игры:</div>
      <div className="themesCards">
        {themes &&
          themes.map((theme) => (
            <div key={theme.id} className="themeCard">
              <img src={theme.image} alt="Картинка темы" className="themeImg" />
              <Link
                to={`/themes/${theme.id}/questions/${
                  questions.find((el) => el.theme_id === theme.id).id
                }`}
              >
                <div className="button">
                  <p>{theme.title}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ThemesPage;
