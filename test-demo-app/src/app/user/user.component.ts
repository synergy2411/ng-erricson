import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [DataService]
})
export class UserComponent implements OnInit {

  user: {name: string};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.user = this.dataService.user;
  }

}
