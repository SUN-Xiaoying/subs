import { Item } from './item.model'

export class Form{
    date: Date = new Date();
    items: Item[];
    members: Person[];
    // public subject: string;
    rate: number;
    public preRate: number;
    

    public checked: number;
    public sum: number;

    constructor(public subject: string){
        this.items = [];
        this.members = [];
    }

    isPositive() : boolean{
        return this.rate >= this.preRate;
    }

    createItem(content: string): void{
        var newItem = new Item(content);
        this.items.push(newItem);
    }

    checkItem(i:string){
        this.checked += 1;
    }

    getRate():number{
        return (this.checked/this.sum)*100;
    }

    
}

export class Person{
    name: string;
    title: string;
}