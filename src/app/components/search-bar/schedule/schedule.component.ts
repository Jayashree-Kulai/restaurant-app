import { Component, OnInit, ElementRef } from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {
    this.model= {
      "year": 2018,
      "month": 8,
      "day": 15
    }
   }

  ngOnInit(): void {
  }


  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  

}
