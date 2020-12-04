import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Item } from '../../model/item.model';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  @Input() public item: Item;
  @Output() private toggleStatus: EventEmitter<Item>;

  constructor() {
    this.toggleStatus = new EventEmitter<Item>();
   }

   onToggleStatus(event){
     this.toggleStatus.emit(this.item);
   }

  //  toggleStatus(){
  //    this.item.status = !this.item.status;
  //  }


}
