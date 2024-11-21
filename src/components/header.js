import { Header } from "./mainContent.styled";
import { useNavigate } from 'react-router-dom'; // Add this import
import logo from "./assets/Logo.png"; 

export const PagesHeader = () => { 

    return (
      <div> 
          <Header> 
            <h1> Blue Brigde </h1>
            <p> Donation Volunteer Goods </p>
          </Header>
      </div>
    );
  };
  
export default PagesHeader;