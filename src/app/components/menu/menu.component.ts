import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { Router } from '@angular/router';
import { Recommended } from '../../interface/recommended';
import { Appetizer } from '../../interface/appetizer';
import { Soup } from '../../interface/soup';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  recommended: Recommended = {
    title: '',
    price: '',
    customizable: '',
    description: '',
    inCart: '',
    imageUrl: ''
  }

  recommendedList: Recommended[];
  appetizerList: Appetizer[];
  soupList: Soup[];

  constructor(private router: Router, private menuService: MenuService) { 
    this.recommendedList = [];
    this.appetizerList = [];
    this.soupList = [];
  }

  ngOnInit(): void {
    this.getAllRecommended();
    this.getAllAppetizers();
    this.getAllSoups();
  }

  getAllRecommended(): void {
    this.recommendedList = this.menuService.getAllRecommended();
  }

  getAllAppetizers(): void {
    this.appetizerList = this.menuService.getAllAppetizers();
    
  }

  getAllSoups(): void {
    this.soupList = this.menuService.getAllSoups();
    
  }
}
