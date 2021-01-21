import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../interface/part2/brands';
import { BrandService } from '../../../service/part2/brand.service';

@Component({
  selector: 'app-popular-brands',
  templateUrl: './popular-brands.component.html',
  styleUrls: ['./popular-brands.component.scss']
})
export class PopularBrandsComponent implements OnInit {

  brand: Brand = {
    title: '',
    type: '',
    description: '',
    logoUrl: '',
    imageUrl: ''
  }

  brandList: Brand[];

  allBrands: boolean = false;
  showText: string = "All Brands";

  brandNumber : number = 0;

  filterBrand: Brand[];

  constructor(private brandService: BrandService) {
    this.brandList = [];
    this.filterBrand = [];

  }

  ngOnInit(): void {
    this.getAllBrands();
    this.filterBrand = this.brandList.slice(0, 1);
  }

  getAllBrands(): void {
    this.brandList = this.brandService.getAllImages();
  }

  previous() {
    this.filterBrand = this.brandList.slice(this.brandNumber - 1, this.brandNumber);
    this.brandNumber--;
  }

  next() {
    this.brandNumber++;
    this.filterBrand = this.brandList.slice(this.brandNumber, this.brandNumber + 1);
  }

  showAllBrands() {
    if (this.allBrands === true) {
      this.filterBrand = this.brandList.slice(0, 1);
      this.allBrands = false;
      this.showText = "All Brands"
    }

    else{
      this.filterBrand = this.brandList.slice(0, this.brandList.length);
      this.showText = "show Less"
      this.allBrands = true;
    }
  }

}
