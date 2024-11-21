import NavigationBar from '../../components/NavigationBar/navbar.js';
import "./PaymentStyleSheet.css"

export const Payment = () => {
    return (
      <>
      <NavigationBar />
      <div style={{}}> 
        <div className='Container'> 
          <div className='PaymentContainer'> 
            <p> Enter your donation </p>
            <div id='PaymentOptions'> 
              <button> 200 </button> 
              <button> 400 </button> 
              <button> 800 </button> 
              <button> 900 </button> 
            </div>
            <p> Mode of Payment </p>
            <button className='PaymentMode'>  </button> 
            <button className='PaymentMode'>  </button> 
            <button className='PaymentMode'>  </button> 
            <p> Your donation will directly go to those affected by the recent fire in Barangay Pasonanca </p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Payment;