import React from 'react'
import MyNavbar from '../../components/NavigationBar/navbar'
import "./LandingPage.css";
export const LandingPage = () => {
  return (
    <>
      <MyNavbar />
      <div className='section1'>
      </div>
      <div className='section2'>
        {/* Success Story */}
        <div className='section2-title'>
          <h1>Success Story</h1>
          <h1>START YOU FUND RAISING JOURNEY</h1>
        </div>
      </div>
    </>
  )
}

export default LandingPage;
