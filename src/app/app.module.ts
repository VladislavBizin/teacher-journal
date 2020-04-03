import {BrowserModule} from '@angular/platform-browser';
import {EventEmitter, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NavPanelComponent} from './components/nav-panel/nav-panel.component';
import {ContentComponent} from './components/content/content.component';
import {NavPanelItemComponent} from './components/nav-panel/components/nav-panel-item/nav-panel-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {StudentsComponent} from './students/components/students/students.component';
import {SubjectsListComponent} from './subjects/components/subjects-list/subjects-list.component';
import {StatisticsComponent} from './components/content/components/statistics/statistics.component';
import {ExportComponent} from './components/content/components/export/export.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {SubjectButtonComponent} from './subjects/components/subject-button/subject-button.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SubjectFormComponent} from './subjects/components/subject-form/subject-form.component';
import {SubjectComponent} from './subjects/components/subject/subject.component';
import {FormComponent} from './students/components/form/form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {RootStoreModule} from './Store/root-store.module';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { StudentComponent } from './students/components/student/student.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavPanelComponent,
    ContentComponent,
    NavPanelItemComponent,
    StudentsComponent,
    SubjectsListComponent,
    StatisticsComponent,
    ExportComponent,
    PageNotFoundComponent,
    SubjectButtonComponent,
    SubjectFormComponent,
    SubjectComponent,
    FormComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    RootStoreModule,
    MatSortModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  providers: [FormBuilder, EventEmitter],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
