# Dbnvcmvrpauhtyrk

Demo: [https://dbnvcmvrpauhtyrk.firebaseapp.com/](https://dbnvcmvrpauhtyrk.firebaseapp.com/)

## Features

- Angular7, Angular Material 7 (ripples), NGXS (state management), ngx-infinite-scroll
- List recommend and top apps from Apple App Store api
- Ghost items for ux enhancement before data loaded
- Responsive
- PWA
- Tested

## File Structure

- .spec.ts are test files.

```
src/
  app/
    api/
      api.response.ts     - Data transfer object of api
      api.module          - Provide api related features
      api.service         - Api connector service
      injection-tokens.ts - Provide token to inject api server
    app-icon/
      app-icon.component  - Show a icon image with styles
      app-icon.module     - Provide icon component as module
    app-list/
      app-list/           - Styled app list with 'ghost' ux
      app-list-hori/      - Styled horizontal app list with 'ghost' ux
      app-list-hori-item/ - Styled horizontal list item and it's 'ghost'
      app-list-item/      - Styled list item and it's ghost
      app-icon.pipe       - Get a right app icon
      app-list.module     - Provide list features
      app-name.pipe       - Get a right app name
    search-bar/           - Search bar component in app
    state/                - State model, action and selectors with NGXS
    app.component        - The app
    app.module.ts        - The root module
  assets/
    icons/               - PWA icons
  environments/          - Enviroments variables for different targets
  index.html             - App entry point
  karma.conf.js          - Karma config
  manifest.json          - PWA manifest
```

## Installation

1. Run `yarn` to install packages.
2. Replace your Google Maps API key in script tag in **src/index.html**
3. Backend server can configure in src/environments.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Coverage info can generate to **(./coverage)** after run `ng test`.
![Coverage](./docs/test_coverage.png 'Coverage')
