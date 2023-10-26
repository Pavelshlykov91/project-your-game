import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import QuestionItem from './QuestionItem';
import type { RootState } from '../../redux/store';
import type { Theme } from './types';
import Modal from '../modal/Modal';

const MainPage = (): JSX.Element => {
  const themes: Theme[] = useSelector((store: RootState) => store.main.themes);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="card_container">
      {themes.map((theme) => (
        <div key={theme.id} className="theme_container">
          <div className="theme_name">{theme.title}</div>
          <div className="question_container">
            {theme.Questions.map((question) => (
              <div key={question.id}>
                {/* <QuestionItem key={question.id} question={question} /> */}
                <button className="open-btn" type="button" onClick={() => setModalActive(true)}>
                  {question.price}
                </button>
                <Modal active={modalActive} setActive={setModalActive} question={question} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
