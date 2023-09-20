import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService,} from '../api.service';
import { Observable, tap, shareReplay, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-gitapi',
  templateUrl: './gitapi.component.html',
  styleUrls: ['./gitapi.component.css'],
})
export class gitapiComponent implements OnInit, OnDestroy{
  constructor(private _api: ApiService) {} 
  

  @ViewChild ("paginator") paginator!: MatPaginator;
  public repositories!: Observable<any>;
  public name = new FormControl('');
  private interval: any;
  private subscriptions: Subscription []=[];

  ngOnInit(): void {
    this.repositories = this._api
      .getRepositories('a')
      .pipe(tap(console.log), shareReplay(1)); 
      
      this.subscriptions.push(this.name.valueChanges.pipe(debounceTime(200)).subscribe(x => {
      this.repositories = this._api
        .getRepositories(x??"")
        .pipe(shareReplay(1));
     }));
  }
  ngOnDestroy(): void {
    for(let subscription of this.subscriptions){
      subscription.unsubscribe()
    }
  }
  pageEvent(event:any):void{
    let params = { 
       page: event.pageIndex, 
       per_page: event.pageSize,
    }
    this.repositories = this._api
      .getRepositories(this.name.value ?? "a",params)
      .pipe(tap(console.log), shareReplay(1)); 
    console.log (this.name)
  }
}
