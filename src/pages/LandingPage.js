import './PagesCSS.css';
import PagesHeader from '../components/header';
import { Footer } from '../components/mainContent.styled';

export const LandingPage = () => { 
  return (
    <div> 
      <PagesHeader/>  
      <Footer/> 
    </div>
  );
};

export default LandingPage;
