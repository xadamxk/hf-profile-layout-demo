import React from 'react';
import './StatsLayout5IconList.css';

const StatsLayout5IconList = ({ userData }) => {
  const { status, account, stats, marketplace } = userData;
  
  return (
    <div className="stats-layout-5">
      <div className="stat-row">
        <span className="row-icon">
          <span className={`status-dot ${status.online ? 'online' : 'offline'}`}></span>
        </span>
        <span className="row-main">{status.online ? 'Online' : 'Offline'}</span>
        <span className="row-sub">Last seen {status.lastSeen}</span>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-calendar-alt"></i></span>
        <span className="row-main">Joined {account.joinDate}</span>
        <span className="row-sub">{account.timeOnline} active</span>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-star"></i></span>
        <span className="row-main">{stats.popularity.toLocaleString()} Popularity</span>
        <button className="action-icon-btn" title="Give Popularity">
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-balance-scale"></i></span>
        <span className="row-main">
          <span className="cred-pos">{stats.credibility.positive}</span>-
          <span className="cred-neu">{stats.credibility.neutral}</span>-
          <span className="cred-neg">{stats.credibility.negative}</span> Credibility
        </span>
        <span className="row-sub"></span>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-handshake"></i></span>
        <span className="row-main">{marketplace.contractsCompleted} Contracts Completed</span>
        <span className="row-sub">{marketplace.openDisputes} Open Disputes</span>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-coins"></i></span>
        <span className="row-main">{stats.bytes.toLocaleString()} Bytes</span>
        <button className="action-icon-btn" title="Give Bytes">
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-file-alt"></i></span>
        <span className="row-main">{stats.threads.toLocaleString()} Threads</span>
        <span className="row-sub">{stats.posts.toLocaleString()} Posts</span>
      </div>

      <div className="stat-row">
        <span className="row-icon"><i className="fas fa-heart"></i></span>
        <span className="row-main">Quick Loves</span>
        <span className="row-sub">{stats.quickLoves.given.toLocaleString()} given | {stats.quickLoves.received.toLocaleString()} received</span>
      </div>
    </div>
  );
};

export default StatsLayout5IconList;
