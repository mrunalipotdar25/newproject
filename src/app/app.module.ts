import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
//import { LoginService } from './login.service';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    
  ],
  imports: [
    BrowserModule,
   // LoginService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
