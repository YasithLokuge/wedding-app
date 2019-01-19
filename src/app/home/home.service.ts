import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  private id: string;

  private infoUrl: string = "https://wt-xxxxx-0.sandbox.auth0-extend.com/dulanji-wedding/";
  private rsvpUrl: string = "https://wt-xxxxx-0.sandbox.auth0-extend.com/dulanji-wedding-reply";
  private attendanceUrl: string = "https://wt-xxxxxx-0.sandbox.auth0-extend.com/dulanji-wedding-store";

  constructor(private http: HttpClient) {

  }

  setId(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  acceptInvitation(name: string, table: string) {
    const body = JSON.stringify({
      id: this.getId(),
      response: "accepted",
      name: name,
      table: table,
    });
    this.http.post(this.rsvpUrl, body, {
      headers: {'Content-Type':'application/json'}
    }).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  rejectInvitation(name: string, table: string) {
    const body = JSON.stringify({
      id: this.getId(),
      response: "rejected",
      name: name,
      table: table,
    });
    this.http.post(this.rsvpUrl, body, {
      headers: {'Content-Type':'application/json'}
    }).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  markAttendance(name: string) {
    const body = {
      name: name
    };
    this.http.post(this.attendanceUrl, body, {
      headers: {'Content-Type':'application/json'}
    }).subscribe(response => {
      console.log(response);
    });
  }

  getData(id: string): Observable<any> {
    console.log(id);
    return this.http.get(this.infoUrl + id);
  }
}
