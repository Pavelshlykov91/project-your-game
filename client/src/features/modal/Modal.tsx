import React, { useState } from 'react';
import './modal.css';
import type { Question } from '../main/types';

const Modal = ({
  active,
  setActive,
  modalMode,
  setModalMode,
  question,
}: {
  active: boolean;
  setActive: (value: boolean) => void;
  modalMode: boolean;
  setModalMode: (value: boolean) => void;
  question: Question;
}): JSX.Element => {
  const [answerInput, setAnswerInput] = useState('');
  const [reaction, setReaction] = useState('');

  const answerQuestion = (): void => {
    setModalMode(true);
    if (question.answer === answerInput) {
      setReaction('Это правильный ответ!');
    } else setReaction('Неправильно!');
  };

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div
        className={active ? 'modal_content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation}
      >
        <div>
          {modalMode ? (
            <>
              <div className="question_item">{reaction}</div>
              {reaction === 'Неправильно!' && (
                <div className="question_item">Правильный ответ: {question.answer}</div>
              )}
              <button type="button" onClick={(e) => setActive(false)}>
                ok!
              </button>
            </>
          ) : (
            <div className='boxQuest'>
              <div className="question_item">{question.content}</div>
              <div className="answerDiv">
                <label className='otvet'>
                  Ваш ответ:
                  <input
                    className="answerInput"
                    value={answerInput}
                    onChange={(e) => setAnswerInput(e.target.value)}
                  />
                  <button className='btnOrange' type="button" onClick={answerQuestion}>
                    Отправить
                  </button>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
