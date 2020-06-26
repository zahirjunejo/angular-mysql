import { Component, OnInit } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { ActionTypes } from '@poc/api-interfaces';
import { ApiHelperService } from '@poc/api-helper';


@Component({
  selector: 'poc-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  logs: any[] = [];

  constructor(
    public apiHelper: ApiHelperService, 
    private appsocket: Socket
  ) { }

  async ngOnInit() {

    // Load previous logs
    let logs = (await this.apiHelper.get('log/getLog')) as any[];

    logs.forEach(dl => {
      dl['createdFrom'] = new Date(dl['createdFrom']).toLocaleString();
      this.logs.push( JSON.stringify(dl, null, 2) );      
    });

    this.appsocket.on(ActionTypes.Data, (deviceLog: any) => {
      if (Object.keys(deviceLog).length){
        deviceLog['createdFrom'] = new Date(deviceLog['createdFrom']).toLocaleString();

        console.log(deviceLog);
        this.logs.push( JSON.stringify(deviceLog, null, 2) );
      }
      // if (Object.keys(deviceLog).length){
      //   console.log("devicelog", deviceLog);
      //   this.logs.push( JSON.stringify(deviceLog, null, 2) );
      // }

    });
  }


}
