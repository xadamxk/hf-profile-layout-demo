import React from 'react';
import './RecentActivity.css';

const RecentActivity = ({ activities, limit }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'thread':
        return 'fa-file-alt';
      case 'post':
        return 'fa-comment';
      case 'reputation':
        return 'fa-star';
      case 'bytes_received':
        return 'fa-arrow-down';
      case 'bytes_given':
        return 'fa-arrow-up';
      case 'quicklove':
        return 'fa-heart';
      default:
        return 'fa-circle';
    }
  };

  const getActivityIconColor = (type) => {
    switch (type) {
      case 'thread':
        return '#3b82f6'; // blue
      case 'post':
        return '#8b5cf6'; // purple
      case 'reputation':
        return '#f59e0b'; // amber
      case 'bytes_received':
        return '#10b981'; // green
      case 'bytes_given':
        return '#ef4444'; // red
      case 'quicklove':
        return '#ec4899'; // pink
      default:
        return '#9ca3af'; // gray
    }
  };

  const renderActivityContent = (activity) => {
    if (activity.type === 'bytes_received' || activity.type === 'bytes_given') {
      const target = activity.type === 'bytes_received' ? activity.from : activity.to;
      return (
        <>
          <div className="activity-header">
            <div className="activity-action">
              <strong>{activity.action}</strong> ({activity.amount} bytes)
            </div>
            <div className="activity-timestamp">{activity.timestamp}</div>
          </div>
          <div className="activity-target-inline">
            {activity.type === 'bytes_received' ? 'from' : 'to'} <strong>{target}</strong>
            {activity.reason && <span> - {activity.reason}</span>}
          </div>
        </>
      );
    }

    if (activity.type === 'reputation' && activity.amount) {
      return (
        <>
          <div className="activity-header">
            <div className="activity-action">
              <strong>{activity.action}</strong> (+{activity.amount})
            </div>
            <div className="activity-timestamp">{activity.timestamp}</div>
          </div>
          {activity.threadTitle && (
            <div className="activity-thread-inline">
              {activity.threadTitle}
              {activity.threadAuthor && <span> by {activity.threadAuthor}</span>}
            </div>
          )}
          {activity.preview && <div className="activity-preview">{activity.preview}</div>}
        </>
      );
    }

    if (activity.type === 'thread') {
      return (
        <>
          <div className="activity-header">
            <div className="activity-action"><strong>{activity.action}</strong></div>
            <div className="activity-timestamp">{activity.timestamp}</div>
          </div>
          {activity.threadTitle && <div className="activity-thread">{activity.threadTitle}</div>}
          {activity.preview && <div className="activity-preview">{activity.preview}</div>}
        </>
      );
    }

    // post and quicklove types
    return (
      <>
        <div className="activity-header">
          <div className="activity-action"><strong>{activity.action}</strong></div>
          <div className="activity-timestamp">{activity.timestamp}</div>
        </div>
        {activity.threadTitle && (
          <div className="activity-thread-inline">
            {activity.threadTitle}
            {activity.threadAuthor && <span> by {activity.threadAuthor}</span>}
          </div>
        )}
        {activity.preview && <div className="activity-preview">{activity.preview}</div>}
      </>
    );
  };

  const displayActivities = limit ? activities.slice(0, limit) : activities;

  return (
    <div className="recent-activity">
      {displayActivities.map((activity, index) => (
        <div key={index} className="activity-item">
          <div 
            className="activity-icon" 
            style={{ color: getActivityIconColor(activity.type) }}
          >
            <i className={`fas ${getActivityIcon(activity.type)}`}></i>
          </div>
          <div className="activity-content">
            {renderActivityContent(activity)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
