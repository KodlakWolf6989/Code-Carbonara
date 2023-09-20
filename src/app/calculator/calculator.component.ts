import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public tlacitka = [
    {symb:'0', val:0},{symb:'1', val:1},{symb:'2', val:2},{symb:'3', val:3},{symb:'4', val:4},{symb:5, val:5},{symb:6, val:6},

    {symb:7, val:7}, {symb:8, val:8},{symb:9, val:9}
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

  private prvnicislo:number = 0;
  private operator:string = ""

  public pridejCisla(cislo:number, vstup:HTMLInputElement){
    vstup.value += cislo.toString();
  }

  public secti(vstup:HTMLInputElement, vypocet:HTMLDivElement){
    vypocet.textContent = vstup.value + " + ";
    this.prvnicislo = parseInt(vstup.value);
    vstup.value = "";
    this.operator = "+"
  }
  public odecti(vstup:HTMLInputElement, vypocet:HTMLDivElement){
    vypocet.textContent = vstup.value + " - ";

    this.operator = "-"
    this.prvnicislo = parseInt(vstup.value);
    vstup.value = "";
  }
  public vykrat(vstup:HTMLInputElement, vypocet:HTMLDivElement){
    vypocet.textContent = vstup.value + " * ";

    this.operator = "*"
    this.prvnicislo = parseInt(vstup.value);
    vstup.value = "";
  }

  public vydel(vstup:HTMLInputElement, vypocet:HTMLDivElement){
    vypocet.textContent = vstup.value + " / ";

    this.operator = "/"
    this.prvnicislo = parseInt(vstup.value);
    vstup.value = "";
  }
  public rovnase(vstup:HTMLInputElement, vypocet:HTMLDivElement){
    vypocet.textContent += vstup.value;

    switch(this.operator){

    case "+" :
    vstup.value = (this.prvnicislo + parseInt(vstup.value)).toString();
    break;

    case "-" :
    vstup.value = (this.prvnicislo - parseInt(vstup.value)).toString();
    break;

    case "*" :
    vstup.value = (this.prvnicislo * parseInt(vstup.value)).toString();
    break;

    case "/" :
    vstup.value = (this.prvnicislo / parseInt(vstup.value)).toString();
    break;

    default:
    vypocet.textContent = "špatný operátor";
    break;
  }

}


}

