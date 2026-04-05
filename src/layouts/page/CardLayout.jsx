import React from 'react';
import './CardLayout.css';
import AboutMeBox from '../../components/AboutMeBox';
import RecentActivity from '../../components/RecentActivity';
import RecentVisitors from '../../components/RecentVisitors';
import Groups from '../../components/Groups';
import RecentContracts from '../../components/RecentContracts';

const CardLayout = ({ StatsComponent, HeaderComponent, userData }) => {
  return (
    <div className="card-layout">
      {/* Profile Header */}
      <div className="profile-header-wrapper">
        <HeaderComponent userData={userData} />
      </div>

      <div className="card-layout-grid">
        {/* Bio Card */}
        <div className="card bio-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-user"></i> About Me</h3>
          </div>
          <div className="card-body">
            <AboutMeBox userData={userData} />
          </div>
        </div>

        {/* Stats Card */}
        <div className="card stats-card">
          <div className="card-header">
            <h3><i className="fas fa-chart-bar"></i> Statistics</h3>
          </div>
          <StatsComponent userData={userData} />
        </div>

        {/* Market Card */}
        <div className="card market-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-shopping-basket"></i> Marketplace</h3>
          </div>
          <div className="card-body">
            <div className="market-stats-grid">
              <div className="market-stat-item">
                <div className="stat-value">{userData.marketplace.contractsCompleted}</div>
                <div className="stat-label">Contracts</div>
              </div>
              <div className="market-stat-item">
                <div className="stat-value">{userData.marketplace.openDisputes}</div>
                <div className="stat-label">Disputes</div>
              </div>
              <div className="market-stat-item">
                <div className="stat-value">
                  <span className="cred-positive">{userData.stats.credibility.positive}</span>-
                  <span className="cred-neutral">{userData.stats.credibility.neutral}</span>-
                  <span className="cred-negative">{userData.stats.credibility.negative}</span>
                </div>
                <div className="stat-label">Credibility</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contracts Card */}
        <div className="card contracts-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-file-contract"></i> Recent Contracts</h3>
          </div>
          <div className="card-body">
            <RecentContracts contracts={userData.recentContracts.slice(0, 3)} />
          </div>
        </div>

        {/* Visitors Card */}
        <div className="card visitors-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-eye"></i> Recent Visitors</h3>
          </div>
          <div className="card-body">
            <RecentVisitors visitors={userData.recentVisitors} variant="flex" />
          </div>
        </div>

        {/* Groups Card */}
        <div className="card groups-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-users"></i> Groups</h3>
          </div>
          <div className="card-body">
            <Groups groups={userData.groups} variant="grid" />
          </div>
        </div>

        {/* Awards Card */}
        <div className="card awards-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-trophy"></i> Awards</h3>
          </div>
          <div className="card-body">
            <div className="awards-grid">
              {userData.awards.map((award, index) => (
                <div key={index} className="award-item" title={award.description}>
                  <i className="fas fa-award"></i>
                  <span>{award.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Card */}
        <div className="card activity-card-layout">
          <div className="card-header">
            <h3><i className="fas fa-stream"></i> Recent Activity</h3>
          </div>
          <div className="card-body">
            <RecentActivity activities={userData.activityFeed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
