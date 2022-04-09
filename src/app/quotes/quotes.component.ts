import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[]=[
    new Quotes( 1, "author","First quote","person")
  ]

  
  constructor() { }


  ngOnInit(): void {
  }

}
