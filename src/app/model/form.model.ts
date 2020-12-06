// import { Item } from './item.model'

export class Form{
    date: Date = new Date();
    items: Item[];
    rate: number;
    public preRate: number;
    

    public checked: number;
    public sum: number;

    constructor(public subject: string){
        this.items = [];
    }

    isPositive() : boolean{
        return this.rate >= this.preRate;
    }

    // createItem(content: string): void{
    //     var newItem = new Item(content);
    //     this.items.push(newItem);
    // }

    // checkItem(i:string){
    //     this.checked += 1;
    // }

    // getRate():number{
    //     return (this.checked/this.sum)*100;
    // }

    
}

export class Item{
    status: boolean;
    

    constructor(public todo: string){
        this.status = false;
    }

    toggleStatus(){
        this.status = !this.status;
    }
}