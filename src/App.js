import logo from './logo.svg';
import './App.css';
import Galery from './galery/galerypage';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/allroutes';
import Home from './galery/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes>
          <Home/>
        </AllRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
