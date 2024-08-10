import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./header/header.component";
import { InvetmentResultComponent } from "./invetment-result/invetment-result.component";
import { AppComponent } from "./app.component";
import { UserInputModule } from "./user-input/user-input.module";


@NgModule({
    declarations : 
    [   
        AppComponent,
        HeaderComponent, 
        InvetmentResultComponent
    ],
    bootstrap :[AppComponent],
    imports : [BrowserModule,UserInputModule]
})
export class AppModule{

}