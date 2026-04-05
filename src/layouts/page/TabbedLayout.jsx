import React, { useState } from 'react';
import './TabbedLayout.css';
import AboutMeBox from '../../components/AboutMeBox';
import RecentActivity from '../../components/RecentActivity';
import RecentVisitors from '../../components/RecentVisitors';
import Groups from '../../components/Groups';
import RecentContracts from '../../components/RecentContracts';

const TabbedLayout = ({ StatsComponent, HeaderComponent, userData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="tabbed-layout">
      <HeaderComponent userData={userData} />

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <i className="fas fa-chart-line"></i> Overview
          </button>
          <button 
            className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <i className="fas fa-stream"></i> Activity
          </button>
          <button 
            className={`tab ${activeTab === 'marketplace' ? 'active' : ''}`}
            onClick={() => setActiveTab('marketplace')}
          >
            <i className="fas fa-shopping-cart"></i> Marketplace
          </button>
          <button 
            className={`tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            <i className="fas fa-users"></i> Social
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="tab-pane">
              <div className="overview-grid">
                <AboutMeBox userData={userData} />
                <div className="stats-wrapper">
                  <StatsComponent userData={userData} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="tab-pane">
              <h3>Recent Activity</h3>
              <RecentActivity activities={userData.activityFeed} />
            </div>
          )}

          {activeTab === 'marketplace' && (
            <div className="tab-pane">
              <h3>Marketplace Activity</h3>
              <div className="market-grid">
                <div className="market-stat">
                  <div className="market-label">Contracts Completed</div>
                  <div className="market-value">{userData.marketplace.contractsCompleted}</div>
                </div>
                <div className="market-stat">
                  <div className="market-label">Open Disputes</div>
                  <div className="market-value">{userData.marketplace.openDisputes}</div>
                </div>
                <div className="market-stat">
                  <div className="market-label">Credibility</div>
                  <div className="market-value">
                    <span className="cred-pos">{userData.stats.credibility.positive}</span>-
                    <span className="cred-neu">{userData.stats.credibility.neutral}</span>-
                    <span className="cred-neg">{userData.stats.credibility.negative}</span>
                  </div>
                </div>
              </div>

              <h3>Recent Contracts</h3>
              <RecentContracts contracts={userData.recentContracts} />
            </div>
          )}

          {activeTab === 'social' && (
            <div className="tab-pane">
              <h3>Recent Visitors</h3>
              <RecentVisitors visitors={userData.recentVisitors} variant="cards" />

              <h3>Groups</h3>
              <Groups groups={userData.groups} variant="grid" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedLayout;
