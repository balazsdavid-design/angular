import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListviewComponent } from './listview/listview.component';
import { DetailedviewComponent } from './detailedview/detailedview.component';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    DetailedviewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


