import React from 'react';
import './StatsLayout4MetricsEmphasis.css';

const StatsLayout4MetricsEmphasis = ({ userData }) => {
  const { status, account, stats, marketplace } = userData;
  
  return (
    <div className="stats-layout-4">
      <div className="status-bar">
        <span className={`status-pill ${status.online ? 'online' : 'offline'}`}>
          {status.online ? 'ONLINE' : 'OFFLINE'}
        </span>
        <span className="status-info">Last seen {status.lastSeen}</span>
        <span className="member-duration">Member {account.timeOnline}</span>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon"><i className="fas fa-comments"></i></div>
          <div className="metric-value">
            {stats.threads.toLocaleString()} | {stats.posts.toLocaleString()}
          </div>
          <div className="metric-label">Threads | Posts</div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><i className="fas fa-shield-alt"></i></div>
          <div className="metric-value">
            {(() => {
              const total = stats.credibility.positive + stats.credibility.neutral + stats.credibility.negative;
              const percentage = total > 0 ? Math.round((stats.credibility.positive / total) * 100) : 0;
              return `${percentage}%`;
            })()}
          </div>
          <div className="metric-label">Credibility</div>
          <div className="metric-sublabel metric-credibility">
            <span className="cred-pos">{stats.credibility.positive}</span>-
            <span className="cred-neu">{stats.credibility.neutral}</span>-
            <span className="cred-neg">{stats.credibility.negative}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><i className="fas fa-star"></i></div>
          <div className="metric-value">
            {stats.popularity.toLocaleString()}
            <span className="metric-trend"><i className="fas fa-arrow-up"></i></span>
          </div>
          <div className="metric-label">Popularity</div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><i className="fas fa-handshake"></i></div>
          <div className="metric-value">
            {(() => {
              const total = marketplace.contractsCompleted + marketplace.openDisputes;
              const percentage = total > 0 ? Math.round((marketplace.contractsCompleted / total) * 100) : 0;
              return `${percentage}%`;
            })()}
          </div>
          <div className="metric-label">Contract Success</div>
          <div className="metric-sublabel">
            {marketplace.contractsCompleted} contracts, {marketplace.openDisputes} disputes
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon"><i className="fas fa-heart"></i></div>
          <div className="metric-value">
            {(stats.quickLoves.given + stats.quickLoves.received).toLocaleString()}
          </div>
          <div className="metric-label">Quick Loves Total</div>
          <div className="metric-sublabel">{stats.quickLoves.given.toLocaleString()} given</div>
        </div>
      </div>
    </div>
  );
};

export default StatsLayout4MetricsEmphasis;
