import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
 
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/*aj false hodnota tu, aj function sa vzdy prerenderuju pri kazdom zavolani*/}
      {/*ale false je Boolen primitive, cize zmenou sa to naozaj nezmeni, ak sa udeje comparison*/}
      {/*ale comparison dvoch objektov nie je to iste*/}
      {/*[1,2,3] === [1,2,3] nie je to iste*/}
      {/*cize react memo v buttone by nefungovalo*/}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
