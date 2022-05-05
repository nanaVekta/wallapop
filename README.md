# Wallapop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1. 
- Ensure you have npm installed in order to run this application.
- After cloning this repo, navigate to the root of the application and run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## File Structure

Within the project you'll find the following directories and files:

```
wallapop
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── home
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   └── home.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── pagination
│   │   │       ├── pagination.component.html
│   │   │       ├── pagination.component.scss
│   │   │       ├── pagination.component.spec.ts
│   │   │       └── pagination.component.ts
│   │   ├── directives
│   │   │   ├── sort.directive.spec.ts
│   │   │   └── sort.directive.ts
│   │   └── helpers
│   │       ├── containsObject.ts
│   │       ├── paginate.ts
│   │       └── sort.ts
│   ├── interfaces
│   │   └── items.ts
│   ├── mocks
│   │   ├── apiService.mock.ts
│   │   └── modal.mock.ts
│   ├── pipes
│   │   ├── filter.pipe.spec.ts
│   │   └── filter.pipe.ts
│   ├── services
│   │   ├── api-service.service.spec.ts
│   │   └── api-service.service.ts
│   ├── assets
│   │   ├── images
│   │   │  └── brand-motion.webp
│   │   └── scss
│   │       ├── main.scss
│   │       ├── variables.scss
│   │       └── wallapop.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── .browserslistrc
├── karma.conf.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

- `components` folder holds the building block of the projects, the pages that is shown to the user
- `directives` folder contains a sort directive used for sorting data alphabetically
- `helpers` folder contains helper functions and classes
- `interfaces` folder contains has an `items.ts` file used to define the type for items data
- `mocks` folder holds the mock data used for testing
- `pipes` folder holds a pipe file used for searching data
- `assets` folder contains images and scss files
- `environments` folder consists of environment files where api url is defined
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
