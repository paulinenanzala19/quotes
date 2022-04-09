import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(  "First quote","author","person","description"),
    new Quotes(  "Second quote","author","person","description"),
    new Quotes(  "Third quote","author","person", "description"),
    new Quotes(  "Fourth quote","author","person", "description"),
    new Quotes(  "Fifth quote","author","person", "description")
  ]

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  
  constructor() { }


  ngOnInit(): void {
  }

}
