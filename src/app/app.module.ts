import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirSwitchComponent } from './dir-switch/dir-switch.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { SharingDataComponent } from './life-cycle/sharing-data.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { AFormsComponent } from './a-forms/a-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    DirSwitchComponent,
    NgIfComponent,
    AttrDirectiveComponent,
    PipesComponent,
    SharingDataComponent,
    FormComponent,
    ListComponent,
    AFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
