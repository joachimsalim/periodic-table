import './App.css';

import { ChemicalElement } from './stories/ChemicalElement';

const App = () => {
  return (
    <>
      <ChemicalElement name='Hydrogen' symbol='H' atomicNumber={1} backgroundColor='deepskyblue' />
      <ChemicalElement name='Oxygen' symbol='O' atomicNumber={8} backgroundColor='lightskyblue'/>
    </>
  );
};

export default App;
