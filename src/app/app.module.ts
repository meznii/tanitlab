import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ListofpeopleComponent } from './listofpeople/listofpeople.component';
import { DetailsofpeopleComponent } from './detailsofpeople/detailsofpeople.component';

@NgModule({
  declarations: [
    AppComponent,
    ListofpeopleComponent,
    DetailsofpeopleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
