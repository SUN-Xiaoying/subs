import { Component, Input } from '@angular/core';
import { Form } from 'src/app/model/form';
import { FormService } from 'src/app/services/form.service';
import { Item } from '../../model/item';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  // public items: Item[];
  // constructor() { 
  //   this.items.push(new Item("first"));
  //   this.items.push(new Item("second"));
  // }
  form : Form;
  @Input() item : Item;
  constructor(
    private formService: FormService
  ){
    this.form = this.formService.form;
  }


}
