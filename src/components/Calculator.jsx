import { useState } from 'react';
import Input from './Input';

import CalculatedList from './CalculatedList';

const initialInputs = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 10,
};

export default function Calculator() {
  const [userInputs, setUserInputs] = useState(initialInputs);

  function changeInputHandler(e) {
    const { id, value } = e.target;
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [id]: +value, // +value means converting string to number
    }));
  }

  return (
    <main>
      <section id="user-input">
        <div className="input-group">
          <Input
            label="Initial Investment"
            id="initialInvestment"
            value={userInputs.initialInvestment}
            onChangeFn={changeInputHandler}
          />
          <Input
            label="Annual Investment"
            id="annualInvestment"
            value={userInputs.annualInvestment}
            onChangeFn={changeInputHandler}
          />
        </div>
        <div className="input-group">
          <Input
            label="Expected Return"
            id="expectedReturn"
            value={userInputs.expectedReturn}
            onChangeFn={changeInputHandler}
          />
          <Input
            label="Duration"
            id="duration"
            value={userInputs.duration}
            onChangeFn={changeInputHandler}
          />
        </div>
      </section>
      <CalculatedList userInputs={userInputs} />
    </main>
  );
}