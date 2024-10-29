import React from "react";

export default function FinishScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80) emoji = "🙂";
  if (percentage >= 50) emoji = "😕";
  if (percentage >= 40) emoji = "😔";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPoints}. (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore is {highscore} points.)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
