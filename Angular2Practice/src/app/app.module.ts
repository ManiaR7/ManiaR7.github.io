import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes } from '@angular/router';


import { CoursesComponent } from './courses.component';
import { EmployeeListComponent } from './employeeList.component';
import { EmployeeTableComponent } from './employeeTable.component';
import { SimpleChangeComponent } from './changeTracker/simpleChange.component';
import { DetailsComponent } from './Details/details.component';
import { NewsComponent } from './components/news.component/news.component';
import { SectionsComponent } from './components/sections.component/sections.component';
import { NewsItemComponent } from './components/news.component/newsitem/newsItem.component';
import { AppComponent } from './app.component';





const appRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'employees', component: EmployeeTableComponent },
  
  {
    path: 'Sections',
    component: SectionsComponent,
    children: [
      { path: 'News', component: NewsComponent },
    ]
  },
  { path: 'details/:str', component: DetailsComponent },
  { path: '', redirectTo:'/courses',pathMatch:'full'}
]

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  declarations: [AppComponent,
                  CoursesComponent,
                  EmployeeListComponent,
                  EmployeeTableComponent,
                  SimpleChangeComponent,
                  DetailsComponent,
    NewsComponent,
                  SectionsComponent,
                  NewsItemComponent
                ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
