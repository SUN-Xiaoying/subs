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
      members: this.fb.array([])
    });
  }

  get members(): FormArray{
    return this.newForm.get('members') as FormArray;
  }

  addMember(){
    this.members.push(
      this.fb.group({
        name: ['', Validators.required],
        title: ['', Validators.required]
      })
    )
  }

  removeMember(index: number){
    this.members.removeAt(index);
  }

  resetForm(){
    this.newForm.reset();
  }


  onSubmit(){
    this.myForm = Object.assign({}, this.newForm.value);
    console.log('New Form Value', this.myForm);
  }
}
