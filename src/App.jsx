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

const pageLayouts = [
  { id: 1, name: 'Two-Column', component: TwoColumnLayout, icon: 'columns' },
  { id: 2, name: 'Tabs', component: TabbedLayout, icon: 'folder' },
  { id: 3, name: 'Cards', component: CardLayout, icon: 'th-large' },
];

const statsLayouts = [
  { id: 1, name: 'Table', component: StatsLayout5IconList },
  { id: 2, name: 'Cards (Metrics Emphasis)', component: StatsLayout4MetricsEmphasis },
  { id: 3, name: 'Cards (Grouped Sections)', component: StatsLayout3GroupedSections },
  { id: 5, name: 'Cards (Grid)', component: StatsLayout2CardGrid },
  { id: 4, name: 'Two-Column Grid', component: StatsLayout1TwoColumn }
];

const headerStyles = [
  { id: 1, name: 'Columns', component: HeaderColumn, icon: 'align-left' },
  { id: 2, name: 'Row', component: HeaderRow, icon: 'align-justify' },
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
          <div className="control-group">
            <label htmlFor="page-layout-select" className="control-label">
              <i className="fas fa-th-large"></i>
              Page Layout
            </label>
            <select 
              id="page-layout-select"
              className="control-select"
              value={currentPageLayout}
              onChange={(e) => setCurrentPageLayout(Number(e.target.value))}
            >
              {pageLayouts.map((layout) => (
                <option key={layout.id} value={layout.id}>
                  {layout.name}
                </option>
              ))}
            </select>
            <p className="control-description">
              Choose how the overall page content is organized and displayed.
            </p>
          </div>

          <div className="control-group">
            <label htmlFor="header-style-select" className="control-label">
              <i className="fas fa-heading"></i>
              Header Style
            </label>
            <select 
              id="header-style-select"
              className="control-select"
              value={currentHeaderStyle}
              onChange={(e) => setCurrentHeaderStyle(Number(e.target.value))}
            >
              {headerStyles.map((header) => (
                <option key={header.id} value={header.id}>
                  {header.name}
                </option>
              ))}
            </select>
            <p className="control-description">
              Select the profile header design showing avatar, name, and banner.
            </p>
          </div>

          <div className="control-group">
            <label htmlFor="stats-display-select" className="control-label">
              <i className="fas fa-chart-bar"></i>
              Stats Display Style
            </label>
            <select 
              id="stats-display-select"
              className="control-select"
              value={currentStatsLayout}
              onChange={(e) => setCurrentStatsLayout(Number(e.target.value))}
            >
              {statsLayouts.map((layout) => (
                <option key={layout.id} value={layout.id}>
                  {layout.name}
                </option>
              ))}
            </select>
            <p className="control-description">
              Define how user statistics and metrics are presented.
            </p>
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
