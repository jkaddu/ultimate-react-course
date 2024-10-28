import React from "react";

export default function Progress({
  index,
  numQuestions,
  points,
  maxPoints,
  answer,
  question,
}) {
  return (
    <header className="progress">
      {/* <progess
        className={`progress-bar ${
          index === question.correctionOption ? ".progress-value" : ""
        } `}
        max={numQuestions}
        value={index + Number(answer !== null)}
      /> */}

      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/<strong>{maxPoints}</strong>
      </p>
    </header>
  );
}
