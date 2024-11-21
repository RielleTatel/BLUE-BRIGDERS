import './PagesCSS.css';
import NavigationBar from '../components/NavigationBar/navbar.js';
import { Footer } from '../components/mainContent.styled';
import { MainContent } from '../components/DonationaPageComponents/content';
import { InformationContainer  } from '../components/DonationaPageComponents/informationContainer';

export const Donation = () => { 
  return (
    <div> 
      <NavigationBar/> 
      <div className='mainContent'> 
        <MainContent/> 
        <InformationContainer/>
      </div>
      <Footer/> 
    </div>
  );
};

export default Donation;
