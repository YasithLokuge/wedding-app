import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {Subject} from 'rxjs/Subject';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor(private activatedRoute: ActivatedRoute,
              private homeService: HomeService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const id = params['id'];
      if (id != null && typeof id !== 'undefined') {
        this.homeService.setId(id);
        console.log('id is not empty : ' + this.homeService.getId());
      }else {
        console.log('id is empty');
      }
    });
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  onAccept() {
    console.log('accepted');
    this._success.next('Thank You! Looking forward to see you on our special day');
  }

  onReject() {
    console.log('rejected');
    this._success.next('Thank You! Your response has been recorded');
  }
}
