import './PagesCSS.css';
import PagesHeader from '../components/header';
import { Footer } from '../components/mainContent.styled';
import { MainContent } from '../components/DonationaPageComponents/content';
import { InformationContainer  } from '../components/DonationaPageComponents/informationContainer';

export const Donation = () => { 
  return (
    <div> 
      <PagesHeader/> 
      <div className='mainContent'> 
        <MainContent/> 
        <InformationContainer/>
      </div>
      <Footer/> 
    </div>
  );
};

export default Donation;
