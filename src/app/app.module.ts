import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {approutes} from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeService} from './home/home.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    approutes,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
