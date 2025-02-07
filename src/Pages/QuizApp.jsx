import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, nextQuestion } from "../Slices/QuizSlice";
import "../Styles/QuizApp.css";
function QuizApp() {
  const dispatch = useDispatch();
  const { questions, answers, currentIndex, score } = useSelector(
    (state) => state.quiz
  );
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(answers);

  const handleNext = () => {
    dispatch(nextQuestion());
  };
  const handleSubmit = () => {
    console.log("your score", score);
    setIsSubmit(true);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(addAnswer({ index: currentIndex, answer: e.target.value }));
  };
  return (
    <div className="quiz-container">
      {isSubmit ? (
        <div className="score-display">
          "Great Job!<br/> Your final score: {score}
        </div>
      ) : (
        <div>
          <h1 className="quiz-title">Answer Following Questions</h1>
          <div>
            <label className="question-label" for="qn">
              {questions[currentIndex].qn}
            </label>
            <select
              className="select-box"
              onChange={(e) => handleChange(e)}
              value={answers[currentIndex] || ""}
            >
              <option value="" disabled>
                Select an answer
              </option>
              {questions[currentIndex].options.map((ans, index) => (
                <option key={index} value={ans}>
                  {ans}
                </option>
              ))}
            </select>
            <br/>
            {currentIndex < questions.length - 1 ? (
              <button
                className="button next-button"
                onClick={handleNext}
                disabled={!answers[currentIndex]}
              >
                Next
              </button>
            ) : (
              <button
                className="button submit-button"
                onClick={handleSubmit}
                disabled={!answers[currentIndex]}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
