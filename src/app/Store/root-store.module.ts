import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from "@ngrx/store";
import { StudentsStoreModule } from './students/students-store.module';
import {EffectsModule} from "@ngrx/effects";
import {SubjectsStoreModule} from "./subjects/subjects-store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StudentsStoreModule,
    SubjectsStoreModule,
  ]
})
export class RootStoreModule { }
