import React from 'react';
import './Groups.css';

const Groups = ({ groups, variant = 'list', limit }) => {
  const displayGroups = limit ? groups.slice(0, limit) : groups;

  if (variant === 'list') {
    return (
      <div className="groups-list">
        {displayGroups.map((group, index) => (
          <div key={index} className="group-list-item">
            <img src={group.image} alt={group.name} />
            <span>{group.name}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="groups-grid">
        {displayGroups.map((group, index) => (
          <div key={index} className="group-item">
            <img src={group.image} alt={group.name} />
            <span>{group.name}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'chips') {
    return (
      <div className="groups-chips">
        {displayGroups.map((group, index) => (
          <div key={index} className="group-chip">
            {group.name}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default Groups;
