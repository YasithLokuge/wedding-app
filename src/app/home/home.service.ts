import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

  private id: string;

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
