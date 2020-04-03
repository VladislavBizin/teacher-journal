import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StudentsComponent} from "./students/components/students/students.component";
import {SubjectsListComponent} from "./subjects/components/subjects-list/subjects-list.component";
import {StatisticsComponent} from "./components/content/components/statistics/statistics.component";
import {ExportComponent} from "./components/content/components/export/export.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {FormComponent} from "./students/components/form/form.component";
import {SubjectComponent} from "./subjects/components/subject/subject.component";

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'subjects',
    component: SubjectsListComponent
  },
  {
    path:'subjects/:id',
    component: SubjectComponent
  },
  {
    path: 'subjects/addSubject',
    component: FormComponent
  },
  {
    path: 'students/addStudent',
    component: FormComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'export',
    component: ExportComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
