import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag: boolean = true;
  arrow: string = "fas fa-chevron-down";
  
  toggleArrow(): void {
    if (this.flag === true) {
      this.arrow = "fas fa-angle-up";
      this.flag = false
    }
    else {
      this.arrow = "fas fa-chevron-down";
      this.flag = true;
    }
  }
}
