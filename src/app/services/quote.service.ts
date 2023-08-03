import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuote } from '../models/quote.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private API_URL       : string = "https://type.fit/api/quotes";
  private quotesSubject : BehaviorSubject<IQuote[]> = new BehaviorSubject<IQuote[]>([]);
  quotes$               : Observable<IQuote[]>      = this.quotesSubject.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.fetchQuotes().subscribe(( quotes: IQuote[] ) => this.quotesSubject.next(quotes));
  }

  fetchQuotes(): Observable<IQuote[]> {
    return this.httpClient.get<IQuote[]>(this.API_URL);
  }

  getQuote(): Observable<IQuote | undefined> {
    return this.quotes$.pipe(
      map(( quotes: IQuote[] ) => {
        if( quotes && quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * quotes.length);
          return quotes[randomIndex];
        }
        return undefined;
      })
    );
  }

}
