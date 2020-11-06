import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
  user = { name : 'Foo'};

  getName() {
    return this.user;
  }

  setName(name : string){
    this.user.name = name;
  }
}
