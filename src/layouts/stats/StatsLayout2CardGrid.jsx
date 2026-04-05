import React from 'react';
import './StatsLayout2CardGrid.css';

const StatsLayout2CardGrid = ({ userData }) => {
  const { status, account, stats, marketplace } = userData;
  
  return (
    <div className="stats-layout-2">
      <div className="stats-cards">
        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-user"></i></div>
          <div className="card-value">
            <span className={`status-badge-card ${status.online ? 'online' : 'offline'}`}>
              {status.online ? 'Online' : 'Offline'}
            </span>
          </div>
          <div className="card-label">Last Seen</div>
          <div className="card-sublabel">{status.lastSeen}</div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-calendar-alt"></i></div>
          <div className="card-value">Member Since</div>
          <div className="card-label">{account.joinDate}</div>
          <div className="card-sublabel">{account.timeOnline} online</div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-shield-alt"></i></div>
          <div className="card-value">Credibility</div>
          <div className="card-label card-credibility">
            <span className="cred-pos">{stats.credibility.positive}</span>-
            <span className="cred-neu">{stats.credibility.neutral}</span>-
            <span className="cred-neg">{stats.credibility.negative}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-star"></i></div>
          <div className="card-value">{stats.popularity.toLocaleString()}</div>
          <div className="card-label">Popularity</div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-handshake"></i></div>
          <div className="card-value">{marketplace.contractsCompleted}</div>
          <div className="card-label">Contracts</div>
          <div className="card-sublabel">
            <span className="badge-danger">{marketplace.openDisputes} disputes</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-heart"></i></div>
          <div className="card-value">Quick Loves</div>
          <div className="card-label">
            {stats.quickLoves.given.toLocaleString()} given / {stats.quickLoves.received.toLocaleString()} received
          </div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-comments"></i></div>
          <div className="card-value">{stats.threads.toLocaleString()}</div>
          <div className="card-label">Threads</div>
          <div className="card-sublabel">{stats.posts.toLocaleString()} posts</div>
        </div>

        <div className="stat-card">
          <div className="card-icon"><i className="fas fa-coins"></i></div>
          <div className="card-value">{stats.bytes.toLocaleString()}</div>
          <div className="card-label">Bytes</div>
        </div>
      </div>
    </div>
  );
};

export default StatsLayout2CardGrid;
