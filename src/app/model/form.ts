export class Form{
    public date: Date = new Date();
    


    constructor(public subject: string,
                public rate: number,
                public preRate: number){
        
    }

    isPositive() : boolean{
        return this.rate >= this.preRate;
    }
}