import { Component, Input } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Item } from '../../model/item.model';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  public items: Item[];
  constructor(private formservice: FormService) { 
    this.items = this.formservice.getItems();
  }

  onToggleStatus(item: Item){
    console.log(item, 'was triggered');
    this.formservice.toggleStatus(item);
  }
  // form : Form;
  // @Input() item : Item;
  // constructor(
  //   private formService: FormService
  // ){
  //   this.form = this.formService.form;
  // }


}
