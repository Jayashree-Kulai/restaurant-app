import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { Router } from '@angular/router';
import { Recommended } from '../../interface/recommended';
import { Appetizer } from '../../interface/appetizer';
import { Soup } from '../../interface/soup';
import { Cart } from '../../interface/cart';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  recommendedList: Recommended[];
  appetizerList: Appetizer[];
  soupList: Soup[];
  cart: Cart[];

  count: number = 1;

  constructor(private router: Router, private menuService: MenuService) { 
    this.recommendedList = [];
    this.appetizerList = [];
    this.soupList = [];
    this.cart = [];
  }

  ngOnInit(): void {
    this.getAllRecommended();
    this.getAllAppetizers();
    this.getAllSoups();
    this.getCartItems();
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

  getCartItems(): void {
    this.cart = this.menuService.getCartItems();
  }

  addRecommendedToCart(item : Recommended) : void {
    item.addButtonText = "ADD AGAIN";
    item.inCart = "Already in Cart";
    const tempItem: Cart = { 
      title : item.title,
      price : item.price,
      count : 1
     };
    this.cart.unshift(tempItem);
  }

  addAppetizerToCart(item : Appetizer) : void {
    item.addButtonText = "ADD AGAIN";
    const tempItem: Cart = { 
      title : item.title,
      price : item.price,
      count : 1
     };
    this.cart.unshift(tempItem);
  }

  addSoupToCart(item : Appetizer) : void {
    item.addButtonText = "ADD AGAIN";
    const tempItem: Cart = { 
      title : item.title,
      price : item.price,
      count : 1
     };
    this.cart.unshift(tempItem);
  }

  incrementItemCount(item: Cart) : void {
    item.count++;
  }

  decrementItemCount(item: Cart) : void {
    if(item.count != 0){
      item.count--;
    }   
  }

  remove(food: Cart) : void {
    this.cart.forEach((item, index) => {
      if (item === food) {
        this.cart.splice(index, 1)
      }
    })
  }

  clearCart() : void {
      this.cart.splice(0,this.cart.length);  
  }
  
}
