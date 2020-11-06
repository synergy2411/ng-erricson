import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  constructor(private httpClient: HttpClient) { }
  setupSocketConnection(){
    this.socket = io.io(environment.SOCKET_ENDPOINT)
    // this.httpClient.get("http://localhost:9090")
    //   .subscribe(response => {console.log(response)});
  }
}
