import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from './Investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  calculte = output<InvestmentInput>();

    enterInitialInvestment  = signal('0');
    enterAnualInvestment  = signal('0');
    enterExpectedReturn  = signal('5');
    enterDuration  = signal('10');

    onSubmit() {
        this.calculte.emit({
          initialInvestment : + this.enterInitialInvestment(),
          annualInvestment: + this.enterAnualInvestment(),
          expectedReturn : + this.enterExpectedReturn(),
          duration : + this.enterDuration()
        })
    }
}
