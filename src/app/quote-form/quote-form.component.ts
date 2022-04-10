
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  author:string;
  name:string;

  
  newQuote = new Quotes("","","","",0);
  @Output() addQuote = new EventEmitter<Quotes>();
  
  submitQuote(newQuote,quoteform){
    if (newQuote.name==""|| newQuote.quote==""){
      return ;

    }else{
      console.log(newQuote)
      this.addQuote.emit(newQuote);
    quoteform.reset()
  


    }
    // this.addQuote.emit(newQuote);
    // quoteform.reset()
    // console.log(newQuote)

      }
      

  constructor() { }

  ngOnInit(): void {
  }

}
