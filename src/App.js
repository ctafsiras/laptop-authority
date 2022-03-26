import './App.css';
import Bonus from './components/Bonus/Bonus';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
     <h1>Laptop Authority</h1>
     <h3>Choose your best Laptop</h3>
     <Products></Products>
     <Bonus></Bonus>
    </div>
  );
}

export default App;
