import { Injectable } from '@angular/core';
import { Brand } from '../../interface/part2/brands';
import { BRAND } from '../../components/part2/popular-brands/brand-mock-list';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor() { }

  getAllImages(): Brand[] {
    return BRAND;
  }

  getBrand(id: number): any {
    return BRAND.find((item : any )=> item.id === id);
    }
}
