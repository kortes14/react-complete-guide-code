import { useState } from 'react';
import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [userInput, setUserInput] = useState(null); //lifting the state up

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  //lifting the state up -> tu je to obalene v userInput, aby sa prepocet tabulky stal stale ked klikneme na Calculate, a any v state boli user inputy
  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} /> {/*lifting the state up*/}

      <ResultsTable />
    </div>
  );
}

export default App;
