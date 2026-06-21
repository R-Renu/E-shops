import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deal from './page/Deal';
import Bestseller from './page/Bestseller';

function App() {
  return (
<>
<Home/>
<Deal/>
<Bestseller/>
</>
  );
}

export default App;
