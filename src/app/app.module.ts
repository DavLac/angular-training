import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CompComponent} from './comp/comp.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { InputComponent } from './input/input.component';
import { DirectiveinputComponent } from './directiveinput/directiveinput.component';
import { IncrementComponent } from './increment/increment.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    ServerComponent,
    ServersComponent,
    InputComponent,
    DirectiveinputComponent,
    IncrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
