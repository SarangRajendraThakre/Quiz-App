import React, { useState } from 'react';

function QuestionCard({ questionType }) {
  return (
    <div className="card question-card">
      <div className="question-card-content">
        <span className="question-type">{questionType}</span>
      </div>
      <div className="question-card-options">
        {/* Add other div elements here */}
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </div>
      {/* New element like the one in the image */}
      <div className="new-element">
        <span className="icon">!</span>
      </div>
    </div>
  );
}

function App() {
  const [questionType, setQuestionType] = useState('');
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddQuestion = (type) => {
    setQuestionType(type);
    setCards([...cards, type]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div id="questionContainer" className="space-y-4">
        {/* Render question cards here */}
        {cards.map((type, index) => (
          <QuestionCard key={index} questionType={type} />
        ))}
      </div>

      <div id="buttonContainer" className="fixed bottom-4 right-4">
        {/* Button to toggle question buttons visibility */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleToggleModal}
        >
          Add Question
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-white p-8 rounded shadow-lg">
              <h2 className="text-2xl mb-4">Add Question</h2>
              <button className="close absolute top-4 right-4" onClick={handleToggleModal}>
                Close
              </button>
              {/* Buttons for adding different types of questions */}
              <button className="btn" onClick={() => handleAddQuestion('TrueFalse')}>True/False</button>
              <button className="btn" onClick={() => handleAddQuestion('MultipleChoice')}>Multiple Choice</button>
              <button className="btn" onClick={() => handleAddQuestion('MultipleSelect')}>Multiple Select</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
