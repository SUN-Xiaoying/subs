import { Injectable } from '@angular/core';
import { Form } from '../model/form';
import { Item } from '../model/item';

@Injectable({
    providedIn: 'root'
})

export class FormService{
    public form : Form;

    getForm():Form{
        return this.form;
    }

    public addItem(item: Item):void{
        this.form.items.push(item);
    }
}