# Angular-and-API-project
Game Database Website using Angular and a public API


## Installing Angular
- Install VS Code
- Install Node.js

```
npm install @angular/cli –g
```
```
ng new appname
```
- Would you like to add Angular routing? No/Yes (as per requirement)
- Which stylesheet format would you like to use? CSS

```
ng serve
```

```
cd src
```

```
cd app
```

```
ng generate component hello
```


### Routing in Angular:
 
_In app.module.ts:_

```
import { RouterModule } from '@angular/router';
```

_In app-routing.module.ts:_

```
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
 
 { path: 'world', component: WorldComponent} 
];

```

_(here in the components, u can use ur component names, e.g.- suppose ur component name is EmployeeList, then ur Component name will be EmployeeListComponent)_
 
_In app.component.html:_

```
<router-outlet></router-outlet>
```
 
_Now run server 

```
ng serve
``` 

_in the browser url, give ur path name as_ http://localhost:4200/pathname 


# NgVideoGameDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
