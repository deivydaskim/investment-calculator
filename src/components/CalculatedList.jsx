import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';

export default function CalculatedList({ userInputs }) {
  const calculatedResults = calculateInvestmentResults(userInputs);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody className="center">
        {calculatedResults.map((result) => {
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>
                {formatter.format(result.valueEndOfYear - result.interest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
