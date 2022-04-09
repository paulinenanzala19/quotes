export class Quotes {
    public showDescription:boolean;

   
    constructor( public quote:string, public author:string, public person:string, public description:string){
        
        this.showDescription=false;
    }
}



