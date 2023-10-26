import React from 'react';
import './modal.css';
import type { Question } from '../main/types';

const Modal = ({
  active,
  setActive,
  question,
}: {
  active: boolean;
  setActive: void;
  question: Question;
}): JSX.Element => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal_content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation}
      >
        <div className="question_item">{question.content}</div>
      </div>
    </div>
  );
};

export default Modal;
