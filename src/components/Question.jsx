import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const Question = ({
  questionText,
  answers,
  answerState,
  onSelectAnswer,
  onSkipAnswer,
  selectedAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answerState={answerState}
        answers={answers}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
