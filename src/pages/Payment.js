import './PagesCSS.css';
import PagesHeader from '../components/header';
import { Footer, 
    Container, 
    DonationSection, 
    DonationButtons,
    InputWrapper,
    PaymentOptions, 
    DecorativeContainer,
    FooterWrapper,
      } from '../components/mainContent.styled';

export const Payment = () => {
    return (
      <Container>
        <PagesHeader />
        <DonationSection>
          <h2>Enter your donation</h2>
          <DonationButtons>
            <button>₱200</button>
            <button>₱600</button>
            <button>₱800</button>
            <button>₱1000</button>
          </DonationButtons>
          <InputWrapper>
            <input type="number" placeholder="0.00" />
            <span>₱</span>
          </InputWrapper>
          <h2>Payment Method</h2>
          <PaymentOptions>
            <button>
              <img src="gcash-icon.png" alt="GCash" />
              GCash
            </button>
            <button>
              <img src="credit-card-icon.png" alt="Credit or Debit" />
              Credit or Debit
            </button>
            <button>
              <img src="paypal-icon.png" alt="PayPal" />
              PayPal
            </button>
          </PaymentOptions>
          <p>
            Your donation will directly go to those affected by the recent fire in Barangay Pasonanca.
          </p>
        </DonationSection>
        <DecorativeContainer>
          <img src="decor-left.png" alt="Decorative Left" />
          <img src="decor-right.png" alt="Decorative Right" />
        </DecorativeContainer>
        <FooterWrapper />
      </Container>
    );
  };
  
  export default Payment;