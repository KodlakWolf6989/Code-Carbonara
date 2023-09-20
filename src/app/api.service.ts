import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
export interface IParameters{
  page?:string,
  per_page?:string,
  sort?:string
  order?:string
}
type parameter_t<T extends IParameters> = {
  [key in keyof T]: string;
};

export interface WeatherPointsResponse{
  
    id: string,
    properties: {
      geometry: string,
      forecast: string,
      forecastHourly: string,
      forecastGridData: string,
      observationStations: string,
      forecastZone: string,
      county: string,
      fireWeatherZone: string,
      timeZone: string,
      radarStation: string
    }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '5fa036906253637fd477de8c5b721d5a';//  jj, taky aby tě to poznalo, protože máme free subscription, jinak jsou i placený atd. tak aby to vědělo, co to má posílat


  constructor(private _http: HttpClient) { }

  getRepositories(query:string, parameters?:parameter_t<IParameters>): Observable<any>{

  if (query === "") {query = "a";}
    return this._http.get<any>(`/api/search/repositories`, {params: {q: query, ...parameters}})
  }
  getUsers(query:string, parameters?:parameter_t<IParameters>): Observable<any>{
    return this._http.get<any>('	"https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"'); //předělej tak, aby to fungovalo
  }
}