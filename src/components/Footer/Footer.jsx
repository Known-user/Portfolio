import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/nav-icon2.svg";
import navIcon3 from "../img/nav-icon3.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerStyle">
        <div className="rowStyle" >
          <div className="logo">
            Abhay
          </div>
          <div className="content">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhay-rawat-b58b2226b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Known-user"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/abhayrawat55/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


const textSmEndStyle = {
  [`@media (minWidth: 576px)`]: {
    textAlign: 'right'
  }
};


