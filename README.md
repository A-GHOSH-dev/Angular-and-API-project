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
 

## i18n NgX Translate
How to Add Translation (i18n) in Angular Application?
We will be going through step by step tutorial, learn how to implement internationalization with examples and various use-cases.

- Step 1 – Create Angular App
```
npm install -g @angular/cli

ng new angular-ngx-translate-demo-app

cd angular-ngx-translate-demo-app
```

- Step 2 – Install Ngx Translate and HTTP Loader Plugins
```
npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save
```

- Step 3 – Update App Module
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

- Step 4 – Setup Translation JSON Files
```
we keep these translation files at ~src/assets/i18n/[lang].json

{
    "TITLE": "Welcome, your profile details are",
    "USER_INFO":{
        "NAME":"Name",
        "WORKING_PROFILE":"Working Profile",
        "ADDRESS_DETAILS":"Address Details",
        "PHONE_NUMBER":"Phone Number",
        "EMAIL_ADDRESS":"Email Address",
        "RELEVANT_EXPERIENCE":"Relevant Experience"
    }
}
```

- Step 5 – Inject TranslateService in Component
```
open the app.component.ts file to import the TranslateService and inject it in the component’s constructor.

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['en', 'es', 'fr']);
    // Set default language
    translate.setDefaultLang('en');
  } 
}
```

- Step 6 – Add Translation Switch to Change Language
```
In the AppComponent add the translateLanguageTo() method which in turn calling the use() method.

//Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
```

- Step 7 – Update HTML with TranslatePipe and Language Switch
```
Now, open the app.component.html file and update it with the following code:

Change Language : <select #selLang (change)="translateLanguageTo(selLang.value)">
  <option *ngFor="let language of translate.getLangs()" [value]="language">{{ language }}</option>
</select>
<h1>{{'TITLE' | translate}}</h1>
  <ul>
    <li>
      <b>{{'USER_INFO.NAME' | translate}}</b> : Heidi Miller
    </li>
    <li>
      <b>{{'USER_INFO.WORKING_PROFILE' | translate}}</b> : Proactive discrete moderator
    </li>
    <li>
      <b>{{'USER_INFO.ADDRESS_DETAILS' | translate}}</b> : 05516 Kristina Heights
    </li>
    <li>
      <b>{{'USER_INFO.PHONE_NUMBER' | translate}}</b> : 253.647.7397 x4073
    </li>
    <li>
      <b>{{'USER_INFO.EMAIL_ADDRESS' | translate}}</b> : Heidi_Miller33@yahoo.com
    </li>
    <li>
      <b>{{'USER_INFO.RELEVANT_EXPERIENCE' | translate}}</b> : 4.5 Years
    </li>
  </ul>
 ```
 
- Step 8 – Run Application

