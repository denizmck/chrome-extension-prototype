import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IQuote } from 'src/app/models/quote.interface';
import { QuoteService } from 'src/app/services/quote.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quote$ : Observable<IQuote | undefined> = undefined!;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quote$ = this.quoteService.getQuote();
  }


}
