import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private loggingService : LoggingService) { }

  Logs : string[] = [];

  ngOnInit(): void {
    this.Logs = this.loggingService.getLog();
  }

}
