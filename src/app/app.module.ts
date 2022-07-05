import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptNameComponent } from './dept-name/dept-name.component';
import { FacultyNameComponent } from './faculty-name/faculty-name.component';
import { StudentNameComponent } from './student-name/student-name.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptNameComponent,
    FacultyNameComponent,
    StudentNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
