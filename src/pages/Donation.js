import './PagesCSS.css';
import PagesHeader from '../components/header';
import { Footer } from '../components/mainContent.styled';
import { MainContent } from '../components/content';
import { InformationContainer  } from '../components/informationContainer';

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
