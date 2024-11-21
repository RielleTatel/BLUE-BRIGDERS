import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Donation } from './pages/Donation';
import { Volunteer } from './pages/Volunteer';
import { Payment } from './pages/payment page/Payment';
import LandingPage from './pages/LandingPages/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page1" element={<Volunteer />} />
          <Route path="/page2" element={<Payment />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
