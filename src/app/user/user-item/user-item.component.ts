import { Component} from '@angular/core';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent{
  public name: string;
  public password: string;
  public rateBottom: number;
  public rateTop: number;
  public rate: number;
  public preRate: number;
  public positiveChanges: boolean;

  constructor() {
    this.name = 'Xiaoying';
    this.password = 'password';
    this.rateBottom = 6;
    this.rateTop = 1;
    this.rate = (this.rateTop / this.rateBottom)*100;
    this.preRate = (7/11)*100;
    this.positiveChanges = this.rate >= this.preRate;
   }

   addItem(){
     this.rateTop += 1;
     this.rate = (this.rateTop / this.rateBottom)*100;
     this.positiveChanges = this.rate >= this.preRate;
   }
}
