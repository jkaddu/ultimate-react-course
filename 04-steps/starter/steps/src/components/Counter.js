import { useState } from "react";
import "../index.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // function addStep() {
  //   setStep((s) => s + 1);
  // }
  // function suntractStep() {
  //   if (step >= 1) setStep((s) => s - 1);
  // }

  function addCount() {
    setCount((c) => (c += step));
  }
  function subtractCount() {
    setCount((c) => (c -= step));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="counterDiv">
      <div>
        <p>
          <input
            type="range"
            min={0}
            max={10}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />{" "}
          <p>Steps: {step}</p>
          {/* Setting the steps using buttons
        <button onClick={suntractStep}>-</button> <p>Steps: {step}</p>{" "}
        <button onClick={addStep}>+</button> */}
        </p>
        <p>
          <button onClick={subtractCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={addCount}>+</button>
          {/* <button onClick={subtractCount}>-</button> <p>Count: {count}</p>{" "}
        <button onClick={addCount}>+</button> */}
        </p>
        <p>
          <span>
            {" "}
            {count === 0
              ? " Today is "
              : count === 1
              ? `In ${count} day it will be `
              : count > 1
              ? `In ${count} days it will be `
              : count === -1
              ? `${Math.abs(count)} day ago it was `
              : `${Math.abs(count)} days ago it was `}
          </span>
          {date.toDateString()}
        </p>
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
