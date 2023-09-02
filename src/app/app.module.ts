import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirSwitchComponent } from './dir-switch/dir-switch.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { PipesComponent } from './pipes/pipes.component';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
