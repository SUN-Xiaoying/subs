export class Item{
    status = false;

    constructor(public todo: string){
        
        
    }

    toggleStatus(){
        this.status = !this.status;
    }
}

export class category{
    name: string;
    priority: number;
}