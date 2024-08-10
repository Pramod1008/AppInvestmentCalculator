import { Component,input } from '@angular/core';
import { calculatedInvestmentResults } from './investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invetment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invetment-result.component.html',
  styleUrl: './invetment-result.component.css'
})
export class InvetmentResultComponent {

  results = input<calculatedInvestmentResults[]>();

}
