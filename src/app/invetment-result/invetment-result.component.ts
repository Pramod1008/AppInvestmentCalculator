import { Component,computed,inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-invetment-result',
  templateUrl: './invetment-result.component.html',
  styleUrl: './invetment-result.component.css'
})
export class InvetmentResultComponent {

  // constructor(private investmentService : InvestmentService){}
  private investmentService = inject(InvestmentService);
  
//  get results()
//  {
//    return this.investmentService.resultData;
//  }
//We Get Readonly data...so can't manupulate data 
//results = computed(() => this.investmentService.resultData());

//we can use like this also We Get Readonly data...so can't manupulate data 
results = this.investmentService.resultData.asReadonly();
}
