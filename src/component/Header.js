import React from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  return (
    <>
    <nav className="header" >
      <div className="logo">
       <img src="https://logodix.com/logo/1788552.png" height="60px" width="60px" style={{borderRadius:"50%"}}/>

      </div>
      <input type="checkbox" id="check" checked="false"/>
      <label for="check" id="checkb"><FiAlignJustify/></label>
      <ul>
        <li>Home</li>
        <li>Our mission</li>
        <li>About us</li>
        <li>Programmers</li>
        <li>Yesj echos</li>
        <li>Media gallery</li>
        <li>Contribute</li>
        <li>Contact us</li>
      </ul>

    </nav>
    </>

  )
}

export default Header;