import React from 'react';
import './HeaderColumn.css';

const HeaderColumn = ({ userData }) => {
  return (
    <div className="profile-header-column">
      <div className="header-left">
        <img src={userData.avatar} alt={userData.username} className="header-avatar" />
        <div className="header-user-info">
          <h2 className="header-username">{userData.displayName}</h2>
          <p className="header-title">{userData.title}</p>
        </div>
      </div>
      <div className="header-banner">
        <img src={userData.bannerImage} alt="Profile Banner" />
      </div>
    </div>
  );
};

export default HeaderColumn;
