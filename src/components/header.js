import { Header } from "./mainContent.styled";
import { useNavigate } from 'react-router-dom'; // Add this import
import logo from "./assets/Logo.png"; 

export const PagesHeader = () => { 

  const navigate = useNavigate(); 

  const handleDonateClick = () => {
    navigate("/page2");
  };

  const handleVolunteerClick = () => {
    navigate("/page1");
  };

  const handleGoodsClick = () => {
    navigate("/page0");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

    return (
      <div> 
          <Header> 
            <div className="logoContainer">
              <img src={logo} alt="Logo pic" style={{width: '100%', height: '100%', borderRadius: '0'}} />
            </div>
            <p onClick={handleDonateClick}> Donation </p>
            <p onClick={handleVolunteerClick}> Volunteer </p>
            <p onClick={handleGoodsClick}> Goods </p> 
            <p onClick={handleGoodsClick}> Home </p> 
          </Header>
      </div>
    );
  };
  
export default PagesHeader;