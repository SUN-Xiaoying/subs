import { Item } from '../model/item'

export class Form{
    public date: Date = new Date();
    public subject: string;
    
    public rate: number;
    public preRate: number;
    
    public items: Item[];
    public checked: number;
    public sum: number;

    constructor(){
        
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