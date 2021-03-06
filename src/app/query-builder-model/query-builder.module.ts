import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MainModelingComponent } from './main.component';
import { QueryBuilderModelingComponent } from './query-builder.component';
import { RuleComponent } from './rule.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    MainModelingComponent,
    QueryBuilderModelingComponent,
    RuleComponent
  ],
  exports: [
  ]
})
export class QueryBuilderModelingModule { }
