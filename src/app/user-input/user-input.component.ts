import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataService } from '../api-data.service';
import { APIResponse, ResultModel } from '../models/APIResponse.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  userInput:String;

  nodes:ResultModel[]

  constructor(private apiService:ApiDataService) { 
    this.userInput = ''
    this.nodes = []
  }

  ngOnInit(): void {
  }

  getChain(){
    let userInputString = this.userInput.toString()
    if(!Number.isInteger(Number.parseInt(userInputString))){
      alert('NOT A NUMBER')
      return;
    }

    console.log(`TO STRING : ${userInputString}`)
    let num = Number.parseInt(userInputString)
    let observable:Observable<ResultModel[]> = this.apiService.getApiResult(num)
    observable.subscribe(data => this.nodes = data)
    observable.subscribe(data => console.log(`data.res : ${data}`))

  }

}
