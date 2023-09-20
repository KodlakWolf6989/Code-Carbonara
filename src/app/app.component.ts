import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public opened = false;
  private navbarElement:any;
  private ul:any;
  ngOnInit(): void {
      this.navbarElement= document.querySelector('#navbar');
      this.ul = document.querySelector('#ul');
  }
  public open():void{
    console.log(this.navbarElement);
    this.opened = !this.opened;
    if(this.opened && this.navbarElement){
      this.navbarElement.classList.add('opened');
      this.navbarElement.classList.remove('closed');
      this.ul.classList.remove('notLoaded');
    }else if(!this.opened){
      this.navbarElement.classList.remove('opened');
      this.navbarElement.classList.add('closed');
      this.ul.classList.add('notLoaded');
    }
  }
}
