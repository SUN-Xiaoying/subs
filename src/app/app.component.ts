import { Component} from '@angular/core';
import { Item } from '../app/model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'subs';

  public myItem : Item;

  constructor(){
    this.myItem = new Item('Shit');
  }

  onToggleStatus(item: Item){
    console.log('Shit ', item, 'was triggered');
    this.myItem.status = !this.myItem.status;
  }
}
