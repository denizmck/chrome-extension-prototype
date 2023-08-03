import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from 'src/app/components/quote/quote.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    QuoteComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
