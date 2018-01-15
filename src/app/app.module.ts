import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {approutes} from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeService} from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    approutes,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
