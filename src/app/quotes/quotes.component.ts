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
    new Quotes(  "First quote","author","person","description",new Date(2019,3,4)),
    new Quotes(  "Second quote","author","person","description", new Date(2014,2,1)),
    new Quotes(  "Third quote","author","person", "description", new Date(2016,4,7)),
    new Quotes(  "Fourth quote","author","person", "description",new Date(2010,5,2)),
    new Quotes(  "Fifth quote","author","person", "description", new Date(2021,10,3))
  ]

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
   this.quotes.push(quote)
   console.log(quote)

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
