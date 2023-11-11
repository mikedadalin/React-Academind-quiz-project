import { useRef } from "react";

const Answers = ({ answers, answerState, onSelect, selectedAnswer }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let CssClass = "";

        if (isSelected) {
          CssClass = answerState == "answered" ? "selected" : answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={CssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
