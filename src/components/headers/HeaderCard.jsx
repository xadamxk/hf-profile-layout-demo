import React from 'react';
import './HeaderCard.css';

const HeaderCard = ({ userData }) => {
  return (
    <div className="profile-header-card">
      <img src={userData.avatar} alt={userData.username} className="card-avatar" />
      <div className="header-info">
        <h2>{userData.displayName}</h2>
        <p className="card-title">{userData.title}</p>
      </div>
      {userData.bannerImage && (
        <div className="card-banner">
          <img src={userData.bannerImage} alt="Profile Banner" />
        </div>
      )}
      <div className="quick-actions">
        <button className="action-btn"><i className="fas fa-envelope"></i></button>
        <button className="action-btn"><i className="fas fa-handshake"></i></button>
        <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
      </div>
    </div>
  );
};

export default HeaderCard;
