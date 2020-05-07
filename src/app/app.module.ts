import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasDirective } from './canvas.directive';
import { HttpClientModule } from '@angular/common/http';
import { PusherService } from './pusher.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
