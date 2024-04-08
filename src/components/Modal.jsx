import React from 'react';

function Modal({ isOpen, onClose, onAddQuestion }) {
  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="modal">
          {/* Modal content */}
          <div className="modal-content">
            {/* Buttons to add different types of questions */}
            <button onClick={() => onAddQuestion('TrueFalse')}>True/False</button>
            <button onClick={() => onAddQuestion('MultipleChoice')}>Multiple Choice</button>
            <button onClick={() => onAddQuestion('MultipleSelect')}>Multiple Select</button>
            {/* Add more buttons as needed */}
          </div>
          {/* Button to close the modal */}
          <button onClick={onClose}>Close Modal</button>
        </div>
      )}
    </>
  );
}

export default Modal;
