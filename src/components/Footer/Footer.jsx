import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/nav-icon2.svg";
import navIcon3 from "../img/nav-icon3.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer" style={footerStyle}>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div className="logo">
            Abhay
          </div>
          <div style={{ textAlign: 'center', ...textSmEndStyle }}>
            <div className="social-icon" style={socialIconStyle}>
              <a href="https://www.linkedin.com/in/abhay-rawat-b58b2226b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Known-user"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/abhayrawat55/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p style={pStyle}>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerStyle = {
  padding: '20px 0',
  textAlign: 'center'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '40px auto',
  padding: '0 15px'
};

const rowStyle = {
  display: 'flex',
  justifyContent:"space-between",
  flexWrap: 'wrap',
  margin: '-15px'
};

const colStyle = (size, sm) => ({
  flex: `0 0 ${(size / 12) * 100}%`,
  maxWidth: `${(size / 12) * 100}%`,
  padding: '15px',
  ...(sm && {
    [`@media (minWidth: 576px)`]: {
      flex: `0 0 ${(sm / 12) * 100}%`,
      maxWidth: `${(sm / 12) * 100}%`
    }
  })
});

const textSmEndStyle = {
  [`@media (minWidth: 576px)`]: {
    textAlign: 'right'
  }
};

const socialIconStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '10px'
};

const pStyle = {
  margin: '0'
};
