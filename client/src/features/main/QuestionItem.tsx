import React, { useState } from 'react';
import type { Question } from './types';
import Modal from '../modal/Modal';

const QuestionItem = ({ question }: { question: Question }): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  const [modalMode, setModalMode] = useState(false);

  return (
    <div>
      <div>
        {modalMode ? (
          <button className="open-btn" type="button">
            done
          </button>
        ) : (
          <button className="open-btn" type="button" onClick={() => setModalActive(true)}>
            {question.price}
          </button>
        )}
      </div>

      <Modal
        modalMode={modalMode}
        setModalMode={setModalMode}
        active={modalActive}
        setActive={setModalActive}
        question={question}
      />
    </div>
  );
};

export default QuestionItem;
