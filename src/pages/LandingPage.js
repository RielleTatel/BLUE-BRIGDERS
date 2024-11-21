import './PagesCSS.css';
import NavigationBar from '../components/NavigationBar/navbar.js';
import FactElement from '../components/DonationaPageComponents/factElements';
import { Footer } from '../components/mainContent.styled';

export const LandingPage = () => { 
  return (
    <div> 
      <NavigationBar/>  
        <FactElement />
      <Footer style={{position: 'absolute', bottom: 0}} /> 
    </div>
  );
};

export default LandingPage;
