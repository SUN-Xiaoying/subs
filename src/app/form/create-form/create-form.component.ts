import { Component} from '@angular/core';
import { Item } from '../../model/item.model';
import { Form } from '../../model/form.model';
import { FormControl, 
          FormGroup, 
          Validators,
          FormBuilder, 
          FormArray} from '@angular/forms';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent{

  private myForm: Form;
  public newForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();

  }

  createForm(){
    this.newForm = this.fb.group({
      subject: new FormControl(null, Validators.required),
      items: this.fb.array([])
    });
  }

  get items(): FormArray{
    return this.newForm.get('items') as FormArray;
  }

  addItem(){
    this.items.push(
      this.fb.group({
        todo: ['', Validators.required]
      })
    )
  }

  removeItem(index: number){
    this.items.removeAt(index);
  }

  resetForm(){
    this.newForm.reset();
  }


  onSubmit(){
    this.myForm = Object.assign({}, this.newForm.value);
    console.log('New Form Value', this.myForm);
  }
}
