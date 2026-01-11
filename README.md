# Admin Dashboard

Single-page admin dashboard built with React, TypeScript, TailwindCSS, and Vite. The UI mirrors a listings/admin control panel with sales charts, overview metrics, featured listings, and interactive modals.

## Tech Stack
- React 19 + TypeScript (Vite bundler)
- TailwindCSS v4 utilities for styling
- Recharts for charting (Sales Overview)
- react-icons for iconography
- Tooling: ESLint, TypeScript build (`tsc -b`), Vite build/preview

## Project Structure
```
src/
	App.tsx            # Page composition/layout
	index.css          # Tailwind imports
	components/
		Header.tsx       # Top bar actions + profile tooltip and modals triggers
		Navigation.tsx   # Primary nav tabs row
		SalesOverview.tsx# Chart + summary metrics (uses Recharts)
		OverviewCard.tsx # Reusable stat card (listings/users panels)
		FeaturedListings.tsx # Listing tiles/gallery
		modals/
			BudgetModal.tsx
			CalendarModal.tsx
			ProfileMenu.tsx
	assets/            # PNG/SVG icons
```

## Architecture Notes
- **Composition-first:** `App.tsx` assembles the page grid: Header → Navigation → main 12-col grid (SalesOverview + sidebar OverviewCards) → FeaturedListings → floating chat FAB.
- **Separation of concerns:** Modals/profile menu live in `components/modals` to keep `Header` lean; reusable cards/components encapsulate styling and data shaping.
- **State:** Local component state only (e.g., modal toggles in `Header`, calendar view state inside `CalendarModal`). No global store.
- **Styling:** Pure Tailwind utility classes (no custom theme files beyond Tailwind base). Custom sizing (e.g., `max-w-360`) relies on project Tailwind config.
- **Icons & assets:** Action buttons and menus use PNG assets for brand consistency; misc icons come from `react-icons`.

## Key Components & Responsibilities
- `Header`: Brand, action icons with tooltips, profile avatar with hover tooltip and dropdown; opens Budget/Calendar/Profile modals.
- `Navigation`: Tab-like row for sections (Dashboard, Listings, etc.).
- `SalesOverview`: Bar/line chart with metric chips, timeframe selectors.
- `OverviewCard`: Generic stat card used for Listings/Users overview.
- `FeaturedListings`: Grid of featured property cards with gradients/overlays.
- Modals (`BudgetModal`, `CalendarModal`, `ProfileMenu`): Self-contained UI/logic for respective overlays.

## Running the Project
- Install: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview build: `npm run preview`

## Onboarding Tips
- Start at `App.tsx` to see layout composition and data flow.
- Tailwind classes drive layout—look for custom sizes (e.g., `max-w-360`) coming from the Tailwind config.
- Modals are mounted from `Header`; their logic lives in `components/modals/*`.
- Charts live only in `SalesOverview` (Recharts). Icons come from `react-icons` plus PNG assets under `src/assets/icons`.
