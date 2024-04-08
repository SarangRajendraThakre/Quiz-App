import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Questionf from './components/Questionf';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionCards, setQuestionCards] = useState([]); // State to hold question cards

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddQuestion = (type) => {
    // Add the new question card to the state
    setQuestionCards([...questionCards, type]);
    setIsModalOpen(false); // Close the modal after adding the question
  };

  return (
    <div className='main'>
      <div className="wrapper">
        <div className='spacer'>
          <Header className="head"/>
        </div>
        <div className='overflowsidebar'>
          <Sidebar 
            isModalOpen={isModalOpen} 
            handleToggleModal={handleToggleModal} 
            addQuestion={handleAddQuestion} // Pass the handleAddQuestion function
            questionCards={questionCards} // Pass the questionCards state
          />
        </div>
        <div className='maincountainer'>
          <Questionf/>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modalinside">
            <div className="modalagaininside">
              {/* Modal header */}
              <div className="modalmainheader ">
                <div className="modalheader">
                  <div className="modalheadertext">Select Question Type</div>
                </div>
              </div>
              {/* Modal body */}
              <div className="mma">
                <div className="modalmainarea">
                  <div className="modalmainareainside">
                    {/* List of available question types */}
                    <div className="modalmainareainsideinsdie">
                      <div className="modallsidequestionlist">
                        {/* Button to add True/False question */}
                        <div className="modalquestiontyep">
                          <div className="testknowtitle">True/False</div>
                          <div className="questionlist">
                            <button
                              className="modalbuttons"
                              onClick={() => handleAddQuestion("True/False")}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                        {/* Add more question types as needed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
