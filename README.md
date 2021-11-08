<h1 align="center"> NgVideoGameDb </h1>

<h2 align="center"> Screenshots </h2>

<p align="center">
<img alt="SuiteCRMLogo" width="70%" src="https://github.com/A-GHOSH-dev/Angular-and-API-project/blob/master/images/1.png" />
  </p>
------------
<p align="center">
<img alt="SuiteCRMLogo" width="70%" src="https://github.com/A-GHOSH-dev/Angular-and-API-project/blob/master/images/2.png" />
  </p>
------------
<p align="center">
<img alt="SuiteCRMLogo" width="70%" src="https://github.com/A-GHOSH-dev/Angular-and-API-project/blob/master/images/3.png" />
  </p>
------------
<p align="center">
<img alt="SuiteCRMLogo" width="70%" src="https://github.com/A-GHOSH-dev/Angular-and-API-project/blob/master/images/4.png" />
  </p>
------------
<p align="center">
<img alt="SuiteCRMLogo" width="70%" src="https://github.com/A-GHOSH-dev/Angular-and-API-project/blob/master/images/5.png" />
  </p>
------------
<p align="center">
<img alt="SuiteCRMLogo" width="70%" src="https://github.com/A-GHOSH-dev/Angular-and-API-project/blob/master/images/6.png" />
  </p>


# NgVideoGameDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

# API used

https://rapidapi.com/accujazz/api/rawg-video-games-database/details

# Angular Guide

- Install VS Code
	
- Install Node.js
	
- npm install @angular/cli –g
	
- ng new appname
	
- Would you like to add Angular routing? No/Yes (as per requirement)
	
- Which stylesheet format would you like to use? CSS
	
- ng serve
	
- cd src
	
- cd app
	
- ng generate component componentname

- In app.module.ts:

```
import { RouterModule } from '@angular/router';
 
In app-routing.module.ts:
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
 


const routes: Routes = [
  {path: 'hello', component: HelloComponent},
 
 { path: 'world', component: WorldComponent} 
];

 ```
 
- (here in the components, u can use ur component names, e.g.- suppose ur component name is EmployeeList, then ur Component name will be EmployeeListComponent)
 
- In app.component.html:

```
<router-outlet></router-outlet>
```

- Now run server - ng serve
 
- in the browser url, give ur path name as http://localhost:4200/pathname 
 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
