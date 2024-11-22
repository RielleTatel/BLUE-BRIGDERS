import React from 'react'
import MyNavbar from '../../components/NavigationBar/navbar'
import "./LandingPage.css";
import MyFooter from '../../components/Footer/Footer';
import BlueBorder from '../../components/BlueBorder/BlueBorder';
export const LandingPage = () => {
  return (
    <>
      <MyNavbar />
      <div className='section1' id='home'>
      </div>
      <BlueBorder />

      <div className='section2' id='volunteer'>
        {/* Success Story */}
        <img className="background-image1" src="/Hands1.png" alt="Decorative" />
        <img className="background-image2" src="/Hands2.png" alt="Decorative" />
        <div className='section2-title'>
          <h1>START YOU FUND RAISING JOURNEY</h1>
        </div>
        <div className='subhead'>
          <h1>SUCCESS <span className='subhead-span'>STORIES</span></h1>
        </div>
        <div className='disaster-image-container'>
          <img src='./picture1.webp'></img>
        </div>
      </div>




      <div className='section3' id='donation'>

        <h1 className='section3-title'><span className='call'>CALL </span><span className='for'>FOR</span> <span className='donation'>DONATION</span></h1>
        <h2 className='section3-subtitle'>Each cent will go directly to the lives of those who need it the most.</h2>
        <div className='grid-container'>

          <div className='card'>
            <div className='picture-container'>
              <img src='./picture1.webp' alt='event-image'></img>
            </div>

            <div className='card-body'>
              <h1>Fundraising for those affected by the recent fire in barangay Pasonanca</h1>
            </div>
          </div>
          <div className='card'>
            <div className='picture-container'>
              <img src='./picture1.webp' alt='event-image'></img>
            </div>

            <div className='card-body'>
              <h1>Fundraising for those affected by the recent fire in barangay Pasonanca</h1>
            </div>
          </div>
          <div className='card'>
            <div className='picture-container'>
              <img src='./picture1.webp' alt='event-image'></img>
            </div>

            <div className='card-body'>
              <h1>Fundraising for those affected by the recent fire in barangay Pasonanca</h1>
            </div>
          </div>




        </div>

      </div >
      <div className='section4'></div>
      <MyFooter></MyFooter>
    </>
  )
}

export default LandingPage;
