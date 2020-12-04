import { Component } from '@angular/core';
import { Form } from 'src/app/model/form.model';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent{

  public forms: Form[];

  constructor() { }


}
