import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GeneralService } from './service/general.service';
import { ScorePipe } from './shared/pipe/score.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
