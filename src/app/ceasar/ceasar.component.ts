import { Component, OnInit } from '@angular/core';

enum LetterPosition { };

@Component({
  selector: 'app-ceasar',
  templateUrl: './ceasar.component.html',
  styleUrls: ['./ceasar.component.css']
})
export class CeasarComponent implements OnInit {

  public vstup: HTMLTextAreaElement;
  private vystup: HTMLTextAreaElement;
  private abecedaVstup:HTMLInputElement;
  private klic:HTMLInputElement;
  private alfaRegexp:RegExp =/^(?!.*(.).*\1).+$/;
  private zakladniAbeceda:string = 'abcdefghijklmnopqrstuvwxyz';
  private abeceda:string=this.zakladniAbeceda;

  public text='';

  constructor() {
    this.abecedaVstup = <HTMLInputElement>document.querySelector('#alpha');
    this.klic = <HTMLInputElement>document.querySelector('#key');
    this.vystup = <HTMLTextAreaElement>document.querySelector('#output');
    this.vstup  = <HTMLTextAreaElement>document.querySelector('#plain');
   }

  ngOnInit(): void {
    if(!this.abecedaVstup || !this.klic){
      this.abecedaVstup = <HTMLInputElement>document.querySelector('#alpha');
      this.klic = <HTMLInputElement>document.querySelector('#key');
      this.vystup = <HTMLTextAreaElement>document.querySelector('#output');
      this.vstup  = <HTMLTextAreaElement>document.querySelector('#plain');
    }
  }
  public sifrovani(){
   this.vystup.value = '';
   const otevrenyText = this.vstup.value;
   const klíč = parseInt(this.klic.value);
for (let kadel = 0; kadel < otevrenyText.length; kadel++){
  let pismeno = otevrenyText[kadel]; 
   for (let pocitadlo = 0; pocitadlo < this.abeceda.length; pocitadlo++){
    let abecedaPismeno = this.abeceda[pocitadlo];
    if (pismeno === abecedaPismeno){
      let index = pocitadlo + klíč;
      if (index >= this.abeceda.length){
        index = index % this.abeceda.length
      }
      this.vystup.value = this.vystup.value + this.abeceda[index];

      break;
    }
  }
}
  }

  public zadejAbecedu(){
  this.abeceda = this.abecedaVstup?.value !== '' ? this.abecedaVstup?.value: this.zakladniAbeceda;
  if(!this.alfaRegexp.test(this.abeceda)){
    alert("abeceda nesmí obsahovat duplikáty");
  }
  }
}
