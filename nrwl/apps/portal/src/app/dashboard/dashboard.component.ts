import { Component, OnInit, NgZone } from '@angular/core';

//AMChart related stuff.
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
am4core.useTheme(am4themes_animated);


import { ApiHelperService } from '@poc/api-helper';
import { Socket } from 'ngx-socket-io';
import { ActionTypes } from '@poc/api-interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public apiHelper: ApiHelperService,
    private appsocket: Socket,
    private zone: NgZone
  ) { }

  ngOnInit() {

  }

}