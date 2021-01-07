import { Injectable } from '@angular/core';
import { Recommended } from '../interface/recommended';
import { RECOMMENDED } from '../components/menu/recommended-mock-list';
import { Appetizer } from '../interface/appetizer';
import { APPETIZERS } from '../components/menu/appetizer-mock-list';
import { Soup } from '../interface/soup';
import { SOUPS } from '../components/menu/soup-mock-list';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getAllRecommended(): Recommended[] {
    return RECOMMENDED;
  }

  getAllAppetizers(): Appetizer[] {
    return APPETIZERS;
  }

  getAllSoups(): Soup[] {
    return SOUPS;
  }
}
