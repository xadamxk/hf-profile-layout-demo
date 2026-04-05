# HF Profile Layouts Demo

A React demo application showcasing different page layouts and profile statistics display styles for a forum/marketplace profile system.

## Features

- **3 Page Layout Options**: Choose between different full-page layouts
  - **Three Column**: Traditional layout with left sidebar (marketplace menu), main content, and right sidebar (stats & info)
  - **Tabbed Interface**: Organized tabs for Overview, Activity, Marketplace, and Social
  - **Card Dashboard**: Modern card-based grid layout with all information in separate cards

- **5 Stats Display Styles**: Each page layout can display statistics using any of these styles
  1. **Two-Column Grid** - Balanced layout with paired stats
  2. **Card Grid** - Visual cards with emphasis on key metrics
  3. **Grouped Sections** - Organized by category (Activity, Reputation, Account)
  4. **Metrics Emphasis** - Number-first design with timeline
  5. **Icon List** - Clean vertical list with maximum information density

- **Mock Data**: All data comes from a JSON file that you can easily edit
- **Dark Theme**: Optimized for `#1f1f1f` background
- **Responsive Design**: All layouts work on mobile, tablet, and desktop
- **Font Awesome Icons**: Professional icons throughout

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Usage

1. **Select Page Layout**: Choose between Three Column, Tabbed Interface, or Card Dashboard
2. **Select Stats Style**: Pick one of the 5 statistics display styles
3. **Edit Mock Data**: Modify `src/data/mockProfileData.json` to change any values
4. **Compare Combinations**: Try different page + stats combinations to find what works best

## Editing Mock Data

All profile data is stored in `src/data/mockProfileData.json`. You can edit any values:

- **Stats**: `popularity`, `threads`, `posts`, `bytes`, `quickLoves`
- **Marketplace**: `contractsCompleted`, `openDisputes`, `credibility`
- **Account**: `joinDate`, `timeOnline`, `username`, `title`
- **Status**: `online`, `lastSeen`
- **Content**: `bio`, `groups`, `awards`, `visitors`, `activityFeed`, `recentContracts`

Changes will be reflected immediately when you save the file.

## Project Structure

```
src/
├── components/
├── layouts/
│   ├── page/                        # Full page layouts
│   │   ├── ThreeColumnLayout.jsx   # Traditional 3-column layout
│   │   ├── TabbedLayout.jsx        # Tabbed interface layout  
│   │   └── CardLayout.jsx          # Card-based dashboard
│   └── stats/                       # Stats display styles
│       ├── StatsLayout1TwoColumn.jsx
│       ├── StatsLayout2CardGrid.jsx
│       ├── StatsLayout3GroupedSections.jsx
│       ├── StatsLayout4MetricsEmphasis.jsx
│       └── StatsLayout5IconList.jsx
├── data/
│   └── mockProfileData.json        # Edit this file to change values
├── App.jsx
└── App.css
```

## Customization

### Adding New Page Layouts
1. Create a new component in `src/layouts/page/`
2. Accept `StatsComponent` and `userData` as props
3. Render `<StatsComponent userData={userData} />` where you want stats displayed
4. Add to the `pageLayouts` array in `App.jsx`

### Adding New Stats Layouts
1. Create a new component in `src/layouts/stats/`
2. Accept `userData` as prop
3. Design your stats display
4. Add to the `statsLayouts` array in `App.jsx`

## Technologies

- React 18
- Vite
- Font Awesome 6
- CSS3 (Grid & Flexbox)

## License

MIT

