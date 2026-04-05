import React from 'react';
import './StatsLayout1TwoColumn.css';

const StatsLayout1TwoColumn = ({ userData }) => {
  const { status, account, stats, marketplace } = userData;
  
  return (
    <div className="stats-layout-1">
      <h3>User Statistics</h3>
      <div className="stats-grid">
        <div className="stats-col">
          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-user"></i></div>
            <div className="stat-content">
              <div className="stat-main">
                Status <span className={`status-badge ${status.online ? 'online' : 'offline'}`}>
                  {status.online ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className="stat-sub">Last Seen:<br/>{status.lastSeen}</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-calendar-alt"></i></div>
            <div className="stat-content">
              <div className="stat-main">{account.joinDate}</div>
              <div className="stat-sub">{account.timeOnline} Online</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-shield-alt"></i></div>
            <div className="stat-content">
              <div className="stat-main">
                Credibility:<br/>
                <span className="cred-pos">{stats.credibility.positive}</span>-
                <span className="cred-neu">{stats.credibility.neutral}</span>-
                <span className="cred-neg">{stats.credibility.negative}</span>
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-star"></i></div>
            <div className="stat-content">
              <div className="stat-main">Popularity: {stats.popularity.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="stats-col">
          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-handshake"></i></div>
            <div className="stat-content">
              <div className="stat-main">Contracts: {marketplace.contractsCompleted} completed</div>
              <div className="stat-sub">Disputes: {marketplace.openDisputes} open</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-heart"></i></div>
            <div className="stat-content">
              <div className="stat-main">Quick Loves</div>
              <div className="stat-sub">
                Given: {stats.quickLoves.given.toLocaleString()}<br/>
                Received: {stats.quickLoves.received.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-comments"></i></div>
            <div className="stat-content">
              <div className="stat-main">Threads: {stats.threads.toLocaleString()}</div>
              <div className="stat-sub">Posts: {stats.posts.toLocaleString()}</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-coins"></i></div>
            <div className="stat-content">
              <div className="stat-main">Bytes: {stats.bytes.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsLayout1TwoColumn;
