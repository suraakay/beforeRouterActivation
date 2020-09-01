import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggingService{

  log : string[] = [];
  
  constructor() { }

  setLog(message){
    this.log = [];
    this.log.push(message)
  }
  getLog(){
    return this.log;
  }

}
