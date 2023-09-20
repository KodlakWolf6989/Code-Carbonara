import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './c404/c404.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CeasarComponent } from './ceasar/ceasar.component';
import { gitapiComponent } from './gitapi/gitapi.component';
import { GameComponent } from './cv/cv.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
 {path:'caesar', component:CeasarComponent},
 {path:'calculator', component: CalculatorComponent},
 {path: 'gitapi', component: gitapiComponent},
 {path: 'game', component: GameComponent},
 {path: 'website', component: WebsiteComponent},
// {path: '**', component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
