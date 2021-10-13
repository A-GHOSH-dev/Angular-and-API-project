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
