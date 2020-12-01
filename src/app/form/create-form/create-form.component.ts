import { Component} from '@angular/core';
import { Item } from '../../model/item';
import { Form } from '../../model/form';
import { FormControl, 
          FormGroup, 
          Validators,
          FormBuilder } from '@angular/forms';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent{

  
  public createItemForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createItem();

  }

  createItem(){
    this.createItemForm = this.fb.group({
      status: new FormControl(false),
      content: new FormControl(null, Validators.required)
    });
  
  }

  onSubmit(){
    console.log('New Form Value', this.createItemForm.value);
  }
}
