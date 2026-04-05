import React, { useState, useRef, useEffect } from 'react';
import './ProfileActions.css';

const ProfileActions = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (action) => {
    console.log(`Action: ${action}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="profile-actions">
      <button className="action-button primary-btn" onClick={() => handleAction('message')}>
        <i className="fas fa-envelope"></i>
        <span>Message</span>
      </button>
      
      <button className="action-button primary-btn" onClick={() => handleAction('convo')}>
        <i className="fas fa-comment"></i>
        <span>Convo</span>
      </button>
      
      <div className="dropdown-container" ref={dropdownRef}>
        <button 
          className="action-button icon-only-btn" 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
        
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => handleAction('start-contract')}>
              <i className="fas fa-file-contract"></i>
              <span>Start Contract</span>
            </button>
            <button className="dropdown-item" onClick={() => handleAction('follow')}>
              <i className="fas fa-user-plus"></i>
              <span>Follow</span>
            </button>
            <button className="dropdown-item" onClick={() => handleAction('give-bytes')}>
              <i className="fas fa-coins"></i>
              <span>Give Bytes</span>
            </button>
            <button className="dropdown-item" onClick={() => handleAction('rate')}>
              <i className="fas fa-star"></i>
              <span>Rate</span>
            </button>
            <button className="dropdown-item" onClick={() => handleAction('add-comrade')}>
              <i className="fas fa-user-friends"></i>
              <span>Add Comrade</span>
            </button>
            <button className="dropdown-item" onClick={() => handleAction('ignore-user')}>
              <i className="fas fa-ban"></i>
              <span>Ignore User</span>
            </button>
            <button className="dropdown-item" onClick={() => handleAction('verify-secret')}>
              <i className="fas fa-key"></i>
              <span>Verify Secret</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileActions;
