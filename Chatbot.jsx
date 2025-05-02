import { useState } from "react";
import axios from "axios";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [quizOver, setQuizOver] = useState(false);
  const [topic, setTopic] = useState("");

  const startQuiz = async (selectedTopic) => {
    console.log(selectedTopic);
    setTopic(selectedTopic);
    setScore(0);
    setQuestionNumber(1);
    setQuizOver(false);
    setSelectedOption(null);
    await fetchQuestion(selectedTopic);
  };

  const fetchQuestion = async (selectedTopic) => {
    
      const response = await axios.post('http://localhost:3000/api/chat', {
        message: selectedTopic,
      });

      console.log(response, "response");
    setCurrentQuestion(response.data);
    setSelectedOption(null);
  };

  const handleOptionSelect = (idx) => {
    setSelectedOption(idx);
  };

  const handleNext = async () => {
    if (selectedOption === null) return alert("Please select an option first!");

    if (selectedOption === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }

    if (questionNumber >= 5) { // Example: quiz of 5 questions
      setQuizOver(true);
    } else {
      setQuestionNumber((prev) => prev + 1);
      await fetchQuestion(topic);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setQuestionNumber(1);
    setQuizOver(false);
    setSelectedOption(null);
    startQuiz(topic);
  };

  return (
    <div className="quiz-container" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>QuickBot Quiz</h1>

      {!topic && (
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => startQuiz("JavaScript")}>JavaScript Quiz</button>
          <button onClick={() => startQuiz("React")}>React Quiz</button>
        </div>
      )}

      {quizOver ? (
        <div>
          <h2>Quiz Over!</h2>
          <p>Your final score: {score} / 5</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          {currentQuestion && (
            <div>
              <h2>Question {questionNumber}:</h2>
              <p>{currentQuestion.question}</p>

              {currentQuestion.options.map((opt, idx) => (
                <div key={idx} style={{ margin: '0.5rem 0' }}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={idx}
                      checked={selectedOption === idx}
                      onChange={() => handleOptionSelect(idx)}
                    />
                    {opt}
                  </label>
                </div>
              ))}

              <button onClick={handleNext} style={{ marginTop: '1rem' }}>
                {questionNumber >= 5 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;

