import React from 'react';
import './TwoColumnLayout.css';
import AboutMeBox from '../../components/AboutMeBox';
import RecentActivity from '../../components/RecentActivity';
import RecentVisitors from '../../components/RecentVisitors';
import Groups from '../../components/Groups';
import RecentContracts from '../../components/RecentContracts';

const TwoColumnLayout = ({ StatsComponent, HeaderComponent, userData }) => {
  return (
    <div className="two-column-layout">
      {/* Header Component */}
      <HeaderComponent userData={userData} />

      <div className="two-column-content">
        <div className="main-content">
          <AboutMeBox userData={userData} />

          <div className="activity-section">
            <h3>Recent Activity</h3>
            <RecentActivity activities={userData.activityFeed} />
          </div>

          <div className="activity-section">
            <h3>Recent Contracts</h3>
            <RecentContracts contracts={userData.recentContracts} />
          </div>
        </div>

        <div className="right-sidebar">
          <StatsComponent userData={userData} />

          <div className="sidebar-section">
            <h3>Recent Visitors</h3>
            <RecentVisitors visitors={userData.recentVisitors} variant="grid" />
          </div>

          <div className="sidebar-section">
            <h3>Groups ({userData.groups.length})</h3>
            <Groups groups={userData.groups} variant="list" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
