export class Quotes {
    public showDescription:boolean;
    votes:number;
    vote:number;
    

   
    constructor( public quote:string, public author:string, public name:string, 
        public description:string,public completeDate:Date=new Date(), votes:number=0, vote:number=0){
        
        this.showDescription=false;
        this.votes=votes||0
        this.vote=vote||0
    }
    upvote(){
        this.votes++
        console.log(this.votes)
    }
    
    downvote(){
        this.vote++
    }
}



