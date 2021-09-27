
import './App.css';
import { useEffect } from 'react';
import Header from './Components/Header/Header';
import Cart from './Components/Header/Cart/Cart';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Cart></Cart>
    </div>
  );
}

export default App;
