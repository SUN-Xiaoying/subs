export class Item{
    public content: string;
    public status: boolean;
    
    constructor(content: string){
        this.content = content;
        this.status = false;
    }

    toggleStatus(){
        this.status = !this.status;
    }

    

}