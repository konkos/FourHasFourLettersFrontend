import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultModel } from './models/APIResponse.model';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  url = 'https://four-has-four-letters.herokuapp.com/v1/numbertoword/chain'

  constructor(private http:HttpClient) { }

  getApiResult(userInput:Number){
    let tempUrl = this.url + `/${userInput}`

    return this.http.post<ResultModel[]>(tempUrl,'')
  }
}
