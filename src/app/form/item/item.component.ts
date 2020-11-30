import { Component, Input} from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  @Input() public item: Item;
  constructor() {
    this.item.content = "wish";
   }



}
