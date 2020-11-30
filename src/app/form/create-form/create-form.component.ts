import { Component} from '@angular/core';
import { Item } from '../../model/item';
import { Form } from '../../model/form'

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent{

  public form: Form;
  public items: Item[];
  constructor() { 
  }

  createForm(){
    console.log('New form', this.form);
  }
}
