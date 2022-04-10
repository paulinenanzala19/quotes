import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  votes: number=0

  quotes:Quotes[]=[
    new Quotes(  "Everyone is a moon and has a dark side which they never show to anybody","author: Mark Twain","posted by Jesse","description",new Date(2019,3,4)),
    new Quotes(  "I love you and thats the beginning and end of everything ","author:R. Scott","posted by Natasha","description", new Date(2014,2,1)),
    new Quotes(  "There is only one way to avoid criticism:do nothing, say nothing and be nothing","author:Aristotle","posted by Hala", "description", new Date(2016,4,7)),
    new Quotes(  "There are two kind of teachers:the kind that feel you with soo much quail shot that you cant move and the kind that just give you a little prod behind and you jump to the skies","author:Robert Frost","posted by Mwangi", "description",new Date(2010,5,2)),
    new Quotes(  "Give the ones you love wings to fly,roots to come back and reasons to stay","author:Delai Lama","posted by Nanzala", "description", new Date(2021,10,3))
  ]

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    console.log(quote)
    var quotess=quote.quote
    var author=quote.author
    var person=quote.person
    var description=quote.description
   this.quotes.push(new Quotes(quotess,author,person,description))
  //  console.log(quote)

  }
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if(toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }


 

  
  constructor() { }


  ngOnInit(): void {
  }

}
