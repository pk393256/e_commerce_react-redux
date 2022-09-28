import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import { Navbar } from './components/navbar';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
