import React, { useState } from "react";

function MortgageCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0); // corrected variable name
  const [result, setResult] = useState(0);

  const handleCalculator = () => {
    let p = parseFloat(principal);
    let r = parseFloat(interest);
    let y = parseFloat(years);

    if (p && r && y) {
      r = r / 12 / 100; // per month
      const calPow = Math.pow(1 + r, y * 12);
      const amount = Math.ceil(p * ((r * calPow) / (calPow - 1)));
      setResult(amount);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission from reloading the page
    handleCalculator();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Principal Loan Amount</label>
      <input
        type="number"
        value={principal}
        min={0}
        onChange={(e) => setPrincipal(e.target.value)}
      />

      <label>
        Interest Rate <span>(%)</span>
      </label>
      <input
        type="number"
        value={interest}
        min={0}
        onChange={(e) => setInterest(e.target.value)}
      />

      <label>
        Length of Loan <span>(years)</span>
      </label>
      <input
        type="number"
        value={years}
        min={0}
        onChange={(e) => setYears(e.target.value)}
      />

      <button type="submit">Calculate</button>
      <span className="span">{`Your EMI is ${result}`}</span>
    </form>
  );
}

export default MortgageCalculator;
