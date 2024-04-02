import React, { useState } from "react";
import "./Questionf.css";
import jpgImage from "/image.jpg";
import { GoPlus } from "react-icons/go";
import { IoTriangleSharp } from "react-icons/io5";
import { FaCircle, FaSquareFull } from "react-icons/fa";
import { BsDiamondFill } from "react-icons/bs";

const Questionf = () => {
  const [option1Text, setOption1Text] = useState("");
  const [option2Text, setOption2Text] = useState("");
  const [option3Text, setOption3Text] = useState("");
  const [option4Text, setOption4Text] = useState("");

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
        <input
          className="questiontextinput"
          type="text"
          placeholder="start typing here"
          name=""
          id=""
        />
      </div>

      <div className="uploadfilebox">
        <div className="uploadedimage">
          <div className="iconandimgcontainer">
            <div className="imgmedia">
              <img src={jpgImage} alt="Uploaded Image" />
              <button id="faplusbtn">
                <span>
                  <GoPlus fontSize="32px" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="optionscontainermain">
        <div className="option" id="option1">
          <div className="optiondiv" style={{ backgroundColor: option1Text ? "#e21b3c" : "white" }}>
            <div className="optionshape" id="optionshape1">
              <span style={{ color: "white" }}>
                <IoTriangleSharp fontSize="30px" />
              </span>
            </div>

            <div className="optionwritingarea">
              <div className="writearea" contentEditable="true" onInput={handleOption1Change}>
                <p className="place" placeholder="Add answer 1" style={{ color: option1Text ? "white" : "black" }}></p>
              </div>
            </div>
          </div>
        </div>

        <div className="option" id="option2">
          <div className="optiondiv" style={{ backgroundColor: option2Text ? "#1368ce" : "white" }}>
            <div className="optionshape" id="optionshape2">
              <span style={{ color: "white" }}>
                <BsDiamondFill fontSize="30px" />
              </span>
            </div>
            <div className="optionwritingarea">
              <div className="writearea" contentEditable="true" onInput={handleOption2Change}>
                <p className="place" placeholder="Add answer 2" style={{ color: option2Text ? "white" : "black" }}></p>
              </div>
            </div>
          </div>
        </div>
        <div className="option" id="option3">
          <div className="optiondiv" style={{ backgroundColor: option3Text ? "#d89e00" : "white" }}>
            <div className="optionshape" id="optionshape3">
              <FaCircle color="white" fontSize="30px" />
            </div>
            <div className="optionwritingarea">
              <div className="writearea" contentEditable="true" onInput={handleOption3Change}>
                <p className="place" placeholder="Add answer 3" style={{ color: option3Text ? "white" : "black" }}></p>
              </div>
            </div>
          </div>
        </div>
        <div className="option" id="option4">
          <div className="optiondiv" style={{ backgroundColor: option4Text ? "#26890c" : "white" }}>
            <div className="optionshape" id="optionshape4">
              <FaSquareFull color="white" fontSize="20px" />
            </div>
            <div className="optionwritingarea">
              <div className="writearea" contentEditable="true" onInput={handleOption4Change}>
                <p className="place" placeholder="Add answer 4" style={{ color: option4Text ? "white" : "black" }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionf;
