import React from 'react';
import './RecentVisitors.css';

const RecentVisitors = ({ visitors, variant = 'grid' }) => {
  if (variant === 'grid') {
    return (
      <div className="visitors-grid">
        {visitors.map((visitor, index) => (
          <div key={index} className="visitor-grid-item">
            <img 
              src={visitor.avatar} 
              alt={visitor.username} 
              className="visitor-avatar" 
            />
            <div className="visitor-grid-name">{visitor.username}</div>
            <div className="visitor-grid-time">{visitor.visitTime}</div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className="visitors-grid-tabbed">
        {visitors.map((visitor, index) => (
          <div key={index} className="visitor-card">
            <img src={visitor.avatar} alt={visitor.username} />
            <div className="visitor-name">{visitor.username}</div>
            <div className="visitor-time">{visitor.visitTime}</div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'flex') {
    return (
      <div className="visitors-flex">
        {visitors.map((visitor, index) => (
          <div key={index} className="visitor-item">
            <img src={visitor.avatar} alt={visitor.username} />
            <div className="visitor-flex-name">{visitor.username}</div>
            <div className="visitor-flex-time">{visitor.visitTime}</div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default RecentVisitors;
