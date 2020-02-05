[myfuture] Front-end application
================================
[myfuture.edu.au](https://myfuture.edu.au)

The public facing website for myfuture

The technologies being used include:
* HTML
* CSS
  * SCSS pre-processor
    * Material UI
    * Bootstrap (functions, variables, grid, utilities and mixins only)
* Javascript
  * Angular 8
    * Angular material
    * Bodybuilder (Elastic Search queries)
* ASP.NET
  * Sitefinity CMS

Content
-------
This application uses Sitefinity as a Headless CMS. Content should be added through the CMS.

Front-end development
---------------------
This application has been built using the Angular framework.

### Requirements
You must have the following installed to develop this project:
* Node (Minimum version 10)
* NPM or Yarn
* Compliance with the following standards
  * Project style guide (TBC)
  * [Angular style guide](Angular.io/guide/styleguide)
  * [Isobar front-end code standards](https://isobar-us.github.io/code-standards)
  * [OWASP coding security practices](https://www.owasp.org/index.php/OWASP_Secure_Coding_Practices_Checklist)

### Setting up locally
Run `npm run setup` in the project directory

### Running locally
Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

Note: This serves up a complete separate instance of the website that only connects to backend through the API (eg. headless) and relies on index.html. 

If not completely headless, you will have to use `npm run watch` which watches for files in the Client directory and relies on index.cshtml. This file will be copied over to the necessary C# implementation (currently Sitefinity Bootstrap4 template). If done this way, localhost:4200 will not come up and no hot reloading occurs, but files are still built as you change. Just access the VS dev url (backend) to view your changes.

#### Running locally for IE11
To run locally for IE11, use `npm run serve:es5` instead.

### Code scaffolding
Run `npm run generate -- component component-name` to generate a new component. You can also use `npm run generate -- directive|pipe|service|class|guard|interface|enum|module`.

For this app, the following will generate code that matches our style guide:

1. If creating a **component, directive or pipe** that will be used *across the application*, use the following command:
   `npm run generate -- component|directive|pipe _shared/components|directives|pipes/schematic-name --module=_shared/shared --export=true`
2. If creating a **service, guard or model (interface/enum)** that will be used *across the application*, use the following command:
   `npm run generate -- service|guard|interface|enum _core/services|guards|models/schematic-name --module=_core/core `
3. Otherwise, if the schematic you are creating belong to a certain feature of the app (jobs-and-careers, study-and-training etc), use the following instead
   `npm run generate -- schematic feature-name/schematic-name --module=feature-name`

### Build
Run `npm run build` to build the project. The build artifacts will be stored in the `Web/Public/app` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Running a fake api
Run `npm run serve:fake` to get access to a fake api for designing services and components

#### Running a fake api for IE11
To run a fake api locally for IE11, use `npm run serve:es5+fake` instead.

Further help
------------
Please see below on where to get help on certain parts of the application

### Angular
To get more help on the Angular CLI use `npm run help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### Upgrading Angular
To upgrade Angular, please follow the steps on [Angular Upgrade](https://update.angular.io/)
