import { useState } from 'react';
import './App.css';
import profileData from './data/mockProfileData.json';

import TwoColumnLayout from './layouts/page/TwoColumnLayout';
import TabbedLayout from './layouts/page/TabbedLayout';
import CardLayout from './layouts/page/CardLayout';

// Stats Layouts
import StatsLayout1TwoColumn from './layouts/stats/StatsLayout1TwoColumn';
import StatsLayout2CardGrid from './layouts/stats/StatsLayout2CardGrid';
import StatsLayout3GroupedSections from './layouts/stats/StatsLayout3GroupedSections';
import StatsLayout4MetricsEmphasis from './layouts/stats/StatsLayout4MetricsEmphasis';
import StatsLayout5IconList from './layouts/stats/StatsLayout5IconList';

// Header Components
import HeaderColumn from './components/headers/HeaderColumn';
import HeaderRow from './components/headers/HeaderRow';
import HeaderCard from './components/headers/HeaderCard';

const pageLayouts = [
  { id: 1, name: 'Two-Column', component: TwoColumnLayout, icon: 'columns' },
  { id: 2, name: 'Tabs', component: TabbedLayout, icon: 'folder' },
  { id: 3, name: 'Cards', component: CardLayout, icon: 'th-large' },
];

const statsLayouts = [
  { id: 1, name: 'Icon List', component: StatsLayout5IconList },
  { id: 2, name: 'Metrics Emphasis', component: StatsLayout4MetricsEmphasis },
  { id: 3, name: 'Grouped Sections', component: StatsLayout3GroupedSections },
  { id: 4, name: 'Two-Column Grid', component: StatsLayout1TwoColumn },
  { id: 5, name: 'Card Grid', component: StatsLayout2CardGrid }
];

const headerStyles = [
  { id: 1, name: 'Column', component: HeaderColumn, icon: 'align-left' },
  { id: 2, name: 'Row', component: HeaderRow, icon: 'align-justify' },
  { id: 3, name: 'Card', component: HeaderCard, icon: 'id-card' },
];

function App() {
  const [currentPageLayout, setCurrentPageLayout] = useState(1);
  const [currentStatsLayout, setCurrentStatsLayout] = useState(1);
  const [currentHeaderStyle, setCurrentHeaderStyle] = useState(1);
  
  const PageLayoutComponent = pageLayouts.find(l => l.id === currentPageLayout)?.component;
  const StatsLayoutComponent = statsLayouts.find(l => l.id === currentStatsLayout)?.component;
  const HeaderComponent = headerStyles.find(h => h.id === currentHeaderStyle)?.component;

  return (
    <div className="app">
      <div className="container">
        <div className="controls-container">
          <div className="control-section">
            <h2>Page Layout</h2>
            <div className="layout-buttons page-layout-buttons">
              {pageLayouts.map((layout) => (
                <button
                  key={layout.id}
                  className={`layout-btn ${currentPageLayout === layout.id ? 'active' : ''}`}
                  onClick={() => setCurrentPageLayout(layout.id)}
                >
                  <span className="layout-icon">
                    <i className={`fas fa-${layout.icon}`}></i>
                  </span>
                  <span className="layout-name">{layout.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h2>Header Style</h2>
            <div className="layout-buttons header-layout-buttons">
              {headerStyles.map((header) => (
                <button
                  key={header.id}
                  className={`layout-btn ${currentHeaderStyle === header.id ? 'active' : ''}`}
                  onClick={() => setCurrentHeaderStyle(header.id)}
                >
                  <span className="layout-icon">
                    <i className={`fas fa-${header.icon}`}></i>
                  </span>
                  <span className="layout-name">{header.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h2>Stats Display Style</h2>
            <div className="layout-buttons stats-layout-buttons">
              {statsLayouts.map((layout) => (
                <button
                  key={layout.id}
                  className={`layout-btn stats-btn ${currentStatsLayout === layout.id ? 'active' : ''}`}
                  onClick={() => setCurrentStatsLayout(layout.id)}
                >
                  <span className="layout-number">{layout.id}</span>
                  <span className="layout-name">{layout.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="layout-preview">
          {PageLayoutComponent && StatsLayoutComponent && HeaderComponent && (
            <PageLayoutComponent 
              StatsComponent={StatsLayoutComponent}
              HeaderComponent={HeaderComponent}
              userData={profileData.user} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
