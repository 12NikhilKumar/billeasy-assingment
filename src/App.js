import logo from './logo.svg';
import './App.css';
import Galery from './galery/galerypage';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/allroutes';
import Home from './galery/home';
import NavBar from './copmonents/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
