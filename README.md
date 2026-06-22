# Character Explorer

Rick and Morty Character Explorer migrated from a Vite SPA to a Next.js App Router application.

The application lets users search Rick and Morty characters, browse paginated API results, open character dossiers, select characters, export selected characters to CSV, switch language, and switch between dark and light themes.

## Task status

- Next.js App Router migration completed
- Server-rendered character search page implemented
- Static About page implemented
- Server-side character details loading implemented
- Server Action search flow implemented
- Server-side CSV export implemented
- Internationalized routes implemented with `next-intl`
- Light and dark theme support implemented
- Unit tests added for model logic, API client, and CSV export route
- Local validation passed with lint, coverage, and production build

Deployment is not required for this task. The project is validated locally with `npm run build`.

## Stack

- Next.js
- React
- TypeScript
- next-intl
- Tailwind CSS
- Vitest
- V8 coverage
- ESLint
- Prettier
- Husky

## Runtime

Recommended runtime:

```bash
node --version
# 22.x
```

The repository contains `.nvmrc` and `.node-version` with Node.js 22.

## Getting started

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run tests:

```bash
npm run test
```

Run tests with coverage:

```bash
npm run test:coverage
```

Create a production build:

```bash
npm run build
```

## Available scripts

```bash
npm run dev
npm run lint
npm run test
npm run test:coverage
npm run build
npm run preview
npm run format:fix
```

## Routes

The application uses localized routes.

```txt
/en-US
/kk-KZ
/en-US/about
/kk-KZ/about
```

Unknown localized routes are handled by the localized 404 page.

```txt
/en-US/unknown-route
/kk-KZ/unknown-route
```

CSV export is served by a server route:

```txt
/api/characters/export?selected=1,2,3
```

## Main features

### Character search

The explorer page reads URL search parameters on the server and loads character results before rendering the page.

Supported query parameters:

```txt
page
search
details
selected
```

Example:

```txt
/en-US?search=Beth&page=2&details=34&selected=31,34,35
```

### Character details

Character dossiers are loaded server-side based on the `details` query parameter.

Opening and closing a dossier keeps the rest of the current URL state stable.

### Character selection

Selected characters are stored in the URL through the `selected` query parameter. This keeps selection state shareable and stable across page navigation.

Example:

```txt
/en-US?selected=1,2,3
```

### CSV export

Selected characters can be exported through a server route.

The route loads selected character details on the server and returns a CSV response with a download attachment header.

```txt
/api/characters/export?selected=1,2,3
```

### Internationalization

The app uses `next-intl` with two locales:

```txt
en-US
kk-KZ
```

The language switcher keeps the current path and query string.

### Theme switching

The app supports dark and light themes. The selected theme is stored in a cookie and applied on the server through the root layout.

## Rendering model

The application intentionally uses different rendering modes where they fit best.

```txt
/[locale]           Dynamic server-rendered explorer page
/[locale]/about     Static generated About page
/api/...            Dynamic server route
```

The About page is statically generated for supported locales.

The explorer page is server-rendered because it depends on query parameters and server-side data loading.

## Architecture

The project uses a feature-oriented structure inspired by Feature-Sliced Design.

```txt
src/app       Next.js App Router routes and API routes
src/entities  Business entities such as Character
src/features  User-facing features such as search, selection, CSV export, theme
src/widgets   Larger UI sections composed from entities and features
src/shared    Shared config, API constants, and utility helpers
src/i18n      Internationalization routing and request config
messages      Locale message files
```

Model, API, and route logic is kept separate from UI where possible. Tests focus on stable business logic and server behavior.

## Tested logic

The test suite covers:

- Character API URL creation, response mapping, and error handling
- Character DTO to UI model mapping
- Search URL parameter parsing and building
- Selected character URL parameter parsing and building
- Character search page loading state
- Character details loading state
- CSV generation and escaping
- CSV export route behavior

Run:

```bash
npm run test:coverage
```

## Validation

Before submitting the task, run:

```bash
npm run lint
npm run test:coverage
npm run build
```

Latest local validation result:

```txt
Test Files: 10 passed
Tests: 56 passed
Coverage for tested model/API/route files: 100%
Production build: passed
```

## Deployment

Deployment is not required for this task.

The project is validated locally with a production Next.js build:

```bash
npm run build
```
