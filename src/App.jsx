import './App.css';
import Login from './pages/login';
import { Routes, Route } from 'react-router-dom';
import Planet from './pages/planet';

function App() {
  return (
    <div className="container">
      <h1>Star Wars</h1>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Planet" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
