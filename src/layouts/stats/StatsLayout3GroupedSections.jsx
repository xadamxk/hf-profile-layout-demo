import React from 'react';
import './StatsLayout3GroupedSections.css';

const StatsLayout3GroupedSections = ({ userData }) => {
  const { status, account, stats, marketplace } = userData;
  
  return (
    <div className="stats-layout-3">
      <div className="status-banner">
        <div className={`status-badge-large ${status.online ? 'online' : 'offline'}`}>
          {status.online ? 'ONLINE' : 'OFFLINE'}
        </div>
        <div className="status-subtitle">Last active {status.lastSeen}</div>
      </div>

      <div className="section-groups">
        <div className="section-box">
          <h4>Account</h4>
          <div className="section-items">
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-calendar-alt"></i></span>
              <span className="item-value">Member since</span>
              <span className="item-label">{account.joinDate}</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-clock"></i></span>
              <span className="item-value">{account.timeOnline}</span>
              <span className="item-label">online</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-coins"></i></span>
              <span className="item-value">{stats.bytes.toLocaleString()}</span>
              <span className="item-label">Bytes</span>
            </div>
          </div>
        </div>

        <div className="section-box">
          <h4>Activity</h4>
          <div className="section-items">
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-comments"></i></span>
              <span className="item-value">{stats.threads.toLocaleString()}</span>
              <span className="item-label">Threads</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-file-alt"></i></span>
              <span className="item-value">{stats.posts.toLocaleString()}</span>
              <span className="item-label">Posts</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-heart"></i></span>
              <span className="item-value">{stats.quickLoves.received.toLocaleString()}</span>
              <span className="item-label">Quick Loves</span>
            </div>
          </div>
        </div>

        <div className="section-box">
          <h4>Statistics</h4>
          <div className="section-items">
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-star"></i></span>
              <span className="item-value">{stats.popularity.toLocaleString()}</span>
              <span className="item-label">Popularity</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-handshake"></i></span>
              <span className="item-value">{stats.credibility.positive}-{stats.credibility.neutral}-{stats.credibility.negative}</span>
              <span className="item-label">Credibility</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-file-contract"></i></span>
              <span className="item-value">{marketplace.contractsCompleted}</span>
              <span className="item-label">Contracts</span>
            </div>
            <div className="section-item">
              <span className="item-icon"><i className="fas fa-exclamation-triangle"></i></span>
              <span className="item-value">{marketplace.openDisputes}</span>
              <span className="item-label">Disputes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsLayout3GroupedSections;
