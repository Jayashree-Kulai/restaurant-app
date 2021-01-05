import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(private _elmRef: ElementRef) { }

  ngOnInit(): void {
   // Data Picker Initialization
$('.datepicker').pickadate();
// Time Picker Initialization
$('#input_starttime').pickatime({});
  }
  

}
