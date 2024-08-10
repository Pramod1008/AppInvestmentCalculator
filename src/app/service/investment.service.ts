import { Injectable, signal } from "@angular/core";
import { calculatedInvestmentResults } from "../model/investment-result.model";
import { InvestmentInput } from "../model/Investment-input.model";

@Injectable({providedIn : "root" })
export class InvestmentService{

    // resultData? : calculatedInvestmentResults[];
  resultData = signal<calculatedInvestmentResults[] | undefined>(undefined)

  CalculateInvestmentResults(userInput : InvestmentInput) {
    console.log(userInput);
    const annualData = [];
    let investmentValue = userInput.initialInvestment;
  
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
    console.log(annualData);
    //this.resultData=  annualData;
    this.resultData.set(annualData);
  }
}