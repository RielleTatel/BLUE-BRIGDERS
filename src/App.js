import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Donation } from './pages/Donation';
import { Volunteer } from './pages/Volunteer';
import { Payment } from './pages/Payment';
import './App.css';
import {LandingPage} from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path="/" element={<Donation />} />
          <Route path="/page1" element={<Volunteer />} />
          <Route path="/page2" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
