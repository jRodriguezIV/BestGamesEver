import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar./NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
    <Routes>
      {/* <Route to="/" element={} /> */}
    </Routes>
      </Router>


    
    </div>
  );
}

export default App;
