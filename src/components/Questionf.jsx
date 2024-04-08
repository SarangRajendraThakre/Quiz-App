import React, { useState } from "react";
import "./Questionf.css";
import jpgImage from "/image.jpg";
import { GoPlus } from "react-icons/go";
import { IoTriangleSharp } from "react-icons/io5";
import { FaCircle, FaSquareFull } from "react-icons/fa";
import { BsDiamondFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";


const Questionf = () => {
  const [option1Text, setOption1Text] = useState("");
  const [option2Text, setOption2Text] = useState("");
  const [option3Text, setOption3Text] = useState("");
  const [option4Text, setOption4Text] = useState("");

  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [questionType, setQuestionType] = useState("");
  const [image, setImage] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addQuestion = () => {
    const newQuestion = {
      questionText,
      options,
      correctAnswers,
      questionType,
    };
    setQuestions([...questions, newQuestion]);
    // Clear input fields after adding question
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectAnswers([]);
  };

  const handleSubmit = async () => {
    try {
      // Upload image
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(
        "http://localhost:3001/api/upload",
        formData
      );
      const imagePath = response.data.imagePath;

      // Send quiz data to backend API including quizTitle and imagePath
      await axios.post("http://localhost:3001/api/quizzes", {
        title: quizTitle,
        visibility: "public",
        imagePath,
        questions,
      });
      alert("Quiz submitted successfully!");
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Failed to submit quiz. Please try again.");
    }
  };


  const handleOption1Change = (e) => {
    setOption1Text(e.target.textContent);
  };

  const handleOption2Change = (e) => {
    setOption2Text(e.target.textContent);
  };

  const handleOption3Change = (e) => {
    setOption3Text(e.target.textContent);
  };

  const handleOption4Change = (e) => {
    setOption4Text(e.target.textContent);
  };

  return (
    <div className="srt">   
     
      <div className="questiontext">
        <div className="advertise">
          <div className="advertiseinner"></div>
        </div>
        
        <div
          className="questiontextinput">
<div className="innerquestiontextinput">



  <div className="innerquestiontextinputinner">

<div className="innerquestiontextinputinnerinner" >
  <div className="innerquestiontextinputinnerinnerinner" contentEditable="true"><p placeholder="start typing your question"></p></div>

  
</div>



  </div>
</div>



          </div>
         
        <div className="mainmiddlearea">
          <div className="mainmiddleareainner">
          <div className="mainmiddleareainnerinner">
          <div className="mainmiddleareainnerinnerinner">
            <div className="mainmiddleareainnerinnerinnerinner"></div>
      
          </div>
          </div>
          </div>
        </div>

        <div className="optionmainarea">
          <div className="optionmainareainner">  <div className="optionmainareainnerinner">
            <div className="optionmainareainnerinnerinner">
              <div className="optioncard"><div className="optioncardinner">
                <span className="optioncardinnerspan">
                  
                </span>
                <div className="optioncardinnermain">
                  <div className="optioncardinnermaintext"></div>
                </div>
                </div></div>
                <div className="optioncard"><div className="optioncardinner">
                <span className="optioncardinnerspan">
                  
                </span>
                <div className="optioncardinnermain">
                  <div className="optioncardinnermaintext"></div>
                </div>
                </div></div>
                <div className="optioncard"><div className="optioncardinner">
                <span className="optioncardinnerspan">
                  
                </span>
                <div className="optioncardinnermain">
                  <div className="optioncardinnermaintext"></div>
                </div>
                </div></div>
                <div className="optioncard"><div className="optioncardinner">
                <span className="optioncardinnerspan">
                  
                </span>
                <div className="optioncardinnermain">
                  <div className="optioncardinnermaintext"></div>
                </div>
                </div></div>
               
            </div> <button className="addmore">Add more options</button>
          </div></div>
        </div>

      </div>


      <div className={`rightsiderbar ${isSidebarOpen ? '' : 'close'}`}>
        <button className="btnright" onClick={toggleSidebar}><span className="faarrow">,<FaArrowLeft/></span></button>
        <div className="rightsidebarmain">
        
        </div>
      </div>
    </div>
  );
};

export default Questionf;