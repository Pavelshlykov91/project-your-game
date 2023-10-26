import React from 'react';
import { useSelector } from 'react-redux';
import QuestionItem from './QuestionItem';
import type { RootState } from '../../redux/store';
import type { Theme } from './types';

const MainPage = (): JSX.Element => {
  const themes: Theme[] = useSelector((store: RootState) => store.main.themes);
  
  return (
    <div className="card_container">
      {themes.map((theme) => (
        <div key={theme.id} className="theme_container">
          <div className="theme_name">{theme.title}</div>
          <div className="question_container">
            {theme.Questions.map((question) => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
