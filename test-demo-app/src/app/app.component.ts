import { SocketioService } from './socketio.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  title = 'test-demo-app';
  constructor(private socketService : SocketioService){}

  ngOnInit(){
    this.socketService.setupSocketConnection();
  }
}
