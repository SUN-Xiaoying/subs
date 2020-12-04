import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css',
  '../../../assets/css/util.css']
})
export class CreateItemComponent{

  private item: Item;
  public createItemForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createItem();
  }

  createItem(){
    this.createItemForm = this.fb.group({
      todo: [null, Validators.required],
      category: this.fb.array([])
    });
  }

  todo(){
    return this.createItemForm.get('todo');
  }

  onSubmit(){
    // Not directly assign the form model to our data model
    this.item = Object.assign({}, this.createItemForm.value);
    console.log('New Item: ', this.createItemForm.value);
  }

  resetForm(){
    this.createItemForm.reset();
  }


  //
}
