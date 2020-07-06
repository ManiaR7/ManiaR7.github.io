import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { SimpleChangeComponent } from './changeTracker/simpleChange.component';
@Component({
  selector: 'app-root',
  template: `<h1>My First Angular 2 App</h1>
<div>
              <ul class='nav nav-tabs'>
                <li routeLinkActive='active' class="nav-item"><a class='nav-link' href routerLink='/courses'>Courses</a></li>
                <li routeLinkActive='active' class="nav-item"><a class='nav-link'  href routerLink='/employees'>Employees</a></li>
                <!--<li routeLinkActive='active' class="nav-item"><a class='nav-link'  href routerLink='/News'>News</a></li>-->
                <li routeLinkActive='active' class="nav-item"><a class='nav-link'  href routerLink='/Sections'>News Section</a></li>
</ul>
              <div style="margin-left:10px" id="wrapper" class="wrapper">
              <router-outlet></router-outlet></div>
</div>
              `
})
export class AppComponent  { name = 'Angular2'; }
