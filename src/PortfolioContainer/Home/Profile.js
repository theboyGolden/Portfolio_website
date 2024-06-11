import React from 'react'
import Typical from 'react-typical'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div classname="colz">
            <div className='colz-icon'>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/theboy_golden/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@precioustsewoo2219">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://x.com/precious_tsewoo">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Golden_Boy</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev💻",
                    1000,
                    "FullStack Developer🌟",
                    1000,
                    "Mobile App Developer📱",
                    1000,
                    "CyberSecurity Expert🧑‍💻",
                    1000,
                    "React/React Native Dev🈸",
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div classname="profile-options">
            <button className='btn primary-btn'>
                {""}
                Hire Me{""}
            </button>
            <a href='MY_CV.pdf' download='MY_CV.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}

export default Profile