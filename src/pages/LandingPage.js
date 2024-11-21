import './PagesCSS.css';
import PagesHeader from '../components/header';
import FactElement from '../components/factElements';
import { Footer } from '../components/mainContent.styled';

export const LandingPage = () => { 
  return (
    <div> 
      <PagesHeader/>  
        <FactElement />
      <Footer style={{position: 'absolute', bottom: 0}} /> 
    </div>
  );
};

export default LandingPage;
