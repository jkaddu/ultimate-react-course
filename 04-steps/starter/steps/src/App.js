import { useState } from "react";
import StepMessage from "./components/StepMessage";
import Counter from "./components/Counter";
import Accordion from "./components/Accordion";
import Button from "./components/Button";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [openCounter, setOpenCounter] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <nav className="navButtons">
        <button onClick={() => setOpenCounter(!openCounter)}>Counter</button>
        <button onClick={() => setOpenAccordion(!openAccordion)}>
          Accordion
        </button>
      </nav>
      {openCounter && <Counter />}
      {openAccordion && <Accordion />}

      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {/* StepMessage is a reusable component where I implemented the prop "step" where you must place a value to know what step it is. As well as the message for the step. Example below.*/}
      {/* <StepMessage step={1}>
        <p>Working</p>
      </StepMessage> */}

      {isOpen && (
        <div className="steps">
          Hello React
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
