import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  rate!: number;
  @Input()
  maxRate!: number;
  @Input()
  stars!: number;

  constructor() {
  }

  ngOnInit() {
    if (this.stars == null) this.stars = this.maxRate;
    //TODO: maxrate=stars
  }

  fullStarsCounter(): Array<any> {
    return new Array(Math.floor(this.rate * (this.stars / this.maxRate)));
  }

  isHalfStar(): boolean {
    return (this.rate * (this.stars / this.maxRate)) % 1 !== 0;
  }

  emptyStarsCounter(): Array<any> {
    return new Array(
      this.stars - this.fullStarsCounter().length - (this.isHalfStar() ? 1 : 0)
    );
  }
}
