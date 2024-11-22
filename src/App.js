import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Payment } from './pages/payment page/Payment';
import { DonationPage } from './pages/Donation Page/DonationPage';
import { VolunteerPage } from './pages/Volunteer Page/VolunteerPage';
import LandingPage from './pages/LandingPages/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/page1" element={<DonationPage />} />
          <Route path="/page2" element={<VolunteerPage/>} /> 
          <Route path="/page3" element={<Payment/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
