import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeadeComponent } from './components/heade/heade.component';
import { SessionOneComponent } from './components/session-one/session-one.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionTwoComponent } from './components/session-two/session-two.component';
import { SessionThreeComponent } from './components/session-three/session-three.component';
import { SessionFourComponent } from './components/session-four/session-four.component';
import { SessionFiveComponent } from './components/session-five/session-five.component';
import { SessionFooterComponent } from './components/session-footer/session-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeadeComponent,
    SessionOneComponent,
    SessionTwoComponent,
    SessionThreeComponent,
    SessionFourComponent,
    SessionFiveComponent,
    SessionFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
