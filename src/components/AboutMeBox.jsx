import React from 'react';
import './AboutMeBox.css';

const AboutMeBox = ({ userData }) => {
  return (
    <div className="about-me-box">
      <h3>About Me</h3>
      <div className="about-me-content">
        {userData.bio.aboutMeImage && (
          <img src={userData.bio.aboutMeImage} alt="Bio" className="about-me-image" />
        )}
        <p>{userData.bio.aboutMe}</p>
      </div>
      <hr className="about-me-divider" />
      <div className="about-me-signature">
        <img src={userData.bio.signature} alt="Signature" className="signature-image" />
      </div>
    </div>
  );
};

export default AboutMeBox;
