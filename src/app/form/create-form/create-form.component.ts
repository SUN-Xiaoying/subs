import { Component} from '@angular/core';
import { from } from 'rxjs';
import { Form } from '../../model/form'

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent{

  public form: Form;
  constructor() { 
    this.form = new Form('subs',0,0);

  }

  createForm(){
    console.log('New form', this.form);
  }
}
