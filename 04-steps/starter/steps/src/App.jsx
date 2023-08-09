import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]


function App() {
const [step, setStape] = useState(1)

function handlePrevious(){
  alert('Ativando a função.')
}

console.log(step)
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950F2", color: "white" }} onClick={handlePrevious}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950F2", color: "white" }} >Next</button>
      </div>
    </div>
  );
}

export default App;
