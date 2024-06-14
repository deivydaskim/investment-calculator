import { useState } from "react";

  const initialInputs = {
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5,
    duration: 12
  }

export default function CalculationInputs() {
  const [userInputs, setUserInputs] = useState(initialInputs)

  function changeInputHandler() {
    
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="">
          Initial Investment
          <input type="number" value={userInputs.initialInvestment} />
        </label>
        <label htmlFor="">
          Annual Investment
          <input type="number" value={userInputs.annualInvestment}/>
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="">
          Expected Return
          <input type="number" value={userInputs.expectedReturn}/>
        </label>
        <label htmlFor="">
          Duration
          <input type="number" value={userInputs.duration}/>
        </label>
      </div>
    </section>
  );
}
