import { Injectable } from '@angular/core';
import { Form } from '../model/form.model';
import { Item } from '../model/item.model';

@Injectable({
    providedIn: 'root'
})

export class FormService{
    private items : Item[];

    constructor(){
      this.items = [
        new Item("Website"),
        new Item("Cute BFs"),
        new Item("Good Feature")
      ]
    }
    getItems() : Item[]{
        return this.items;
    }

    createItem(item: Item){
        // let foundItem = this.items.find( each => each.code === item.code);
        // if (foundItem){
        //     return false;
        // }
        this.items.push(item);
        return true;
    }

    toggleStatus(item: Item){
        // let foundItem = this.items.find( each => each.code === item.code);
        // foundItem.status = !foundItem.status;
        item.status = !item.status;
    }
}