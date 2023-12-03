import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="bannerInner">
            <div className="bannerImg">
                <img src="https://yesj.org/assets/images/group-3.jpg" height="300px" width="100%" />

            </div>
            <div className="bannerContent">
                <h2>BECOME A VOLUNTEER</h2>
                <p>Our Voluntary Immersion Programme enables you to challenge yourself, experience another culture and develop an attitude of being grateful.</p>
                <br/>
                <p><b>Come and immerse yourself to change your world.</b></p>
                <button className="btnn">SIGN-UP NOW</button>
            </div>
           
        </div>

      </div>
    </>
  )
}

export default Banner;