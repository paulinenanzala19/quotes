export class Quotes {
    public showDescription:boolean;
    votes:number;
    

   
    constructor( public quote:string, public author:string, public name:string, 
        public description:string,public completeDate:Date, votes:number=0){
        
        this.showDescription=false;
        this.votes=votes||0
    }
    upvote(){
        this.votes++
    }
    downvote(){
        this.votes--
    }
}



