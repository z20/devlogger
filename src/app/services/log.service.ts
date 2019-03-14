import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('3/13/2019 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date('2/23/2019 12:54:23')},
      {id: '3', text: 'Added Logs Component', date: new Date('4/17/2019 12:54:23')}
    ]
   }

   getLogs() {
     return this.logs;
   }
}
