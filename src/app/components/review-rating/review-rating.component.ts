import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ReviewratingService } from 'src/app/service/reviewrating.service';
import { Reviewrating } from '../../interface/Reviewrating'

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss']
})
export class ReviewRatingComponent implements OnInit {


  review: Reviewrating = {
    name: 'ABC',
    review: 0,
    rating: 0,
    star: 0,
    comment: '',
    date: new Date(),
    like: 0,
    likeIconColor: 'gray',
    imageurl: '',
    reviewImage: []
  }

  reviewRating: Reviewrating[];
  serviceSelected: boolean = false;
  foodSelected: boolean = false;
  imageFlag: boolean = false;

  urls: any[] = [];

  arrayFood: any[] = [];
  arrayService: any[] = [];
  selectedFoodRate: number = -1;
  selectedServiceRate: number = -1;

  constructor(private router: Router, private reviewratingservice: ReviewratingService) {
    this.reviewRating = [];
    this.arrayFood = [1, 2, 3, 4, 5];
    this.arrayService = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
    this.getAllReviewRating();
  }

  onClickItemFood(index: number) {
    console.log("food rated as..", index);
    this.selectedFoodRate = index;
    this.foodSelected = true;
  }

  onClickItemService(index: number) {
    console.log("service rated as..", index);
    this.selectedServiceRate = index;
    this.serviceSelected = true;
  }


  onClick(item: Reviewrating): void {
    if (item.likeIconColor === "gray") {
      item.like++;
      item.likeIconColor = "orange"
    } else {
      item.like--;
      item.likeIconColor = "gray"
    }
  }

  getAllReviewRating(): void {
    this.reviewRating = this.reviewratingservice.getAllReviewRating();
    console.log("all reviewrating ..", this.reviewRating)
  }

  show(num: number): void {
    console.log("number.....", num);
  }

  selectImage() {
    this.imageFlag = true;
  }

  detectFiles(event: any) {
    // this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  saveReview(): void {
    const TempReview: Reviewrating = { ...this.review };
    this.reviewRating.unshift(TempReview)
  }

}