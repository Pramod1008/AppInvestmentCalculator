import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { UserInputComponent } from "./user-input.component";


@NgModule({
    declarations :[UserInputComponent],
    imports :[FormsModule],
    exports : [UserInputComponent]
})
export class UserInputModule{}