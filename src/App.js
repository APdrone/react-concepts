import { useState } from 'react';
import './index.css';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  let [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // test.name = 'Fred';
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? '\u00D7' : '\u039E'}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
