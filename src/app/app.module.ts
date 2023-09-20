import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeasarComponent } from './ceasar/ceasar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WebsiteComponent } from './website/website.component';
import { GameComponent } from './cv/cv.component';
import { gitapiComponent } from './gitapi/gitapi.component';
import { HttpClientModule } from '@angular/common/http';
import { C404Component } from './c404/c404.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CeasarComponent,
    CalculatorComponent,
    WebsiteComponent,
    GameComponent,
    C404Component,
    gitapiComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
