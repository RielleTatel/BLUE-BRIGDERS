import React from 'react'
import MyNavbar from '../../components/NavigationBar/navbar'
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
      <div className='section3'>
        <h1 className='section3-title'>CALL FOR DONATION</h1>
        <h2 className='section3-subtitle'>Each cent will go directly to the lives of those who need it the most.</h2>
      </div>
    </>
  )
}

export default LandingPage;
