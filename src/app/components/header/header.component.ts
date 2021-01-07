import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public actions = ['English', 'Kannada', 'Hindi']
  public dropdownItem: string;
  constructor() {
    this.dropdownItem = this.actions[0];
  }

  ngOnInit(): void {
  }

  changeValue(item: string) {
    this.dropdownItem = item;
  }
  
  

}
