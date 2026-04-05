import React from 'react';
import './HeaderRow.css';
import ProfileActions from '../ProfileActions';

const HeaderRow = ({ userData }) => {
  return (
    <div className="profile-header-row">
      <img src={userData.avatar} alt={userData.username} className="header-avatar" />
      <div className="header-info">
        <h2>{userData.displayName}</h2>
        <p>{userData.title}</p>
      </div>
      {userData.bannerImage && (
        <div className="header-banner-row">
          <img src={userData.bannerImage} alt="Profile Banner" />
        </div>
      )}
      <ProfileActions />
    </div>
  );
};

export default HeaderRow;
