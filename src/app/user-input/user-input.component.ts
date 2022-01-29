import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  userInput:String;

  constructor(private apiService:ApiDataService) { 
    this.userInput = ''
  }

  ngOnInit(): void {
  }

  getChain(){
    console.log(this.userInput.toString());
    
    this.apiService.getApiResult(Number.parseInt(this.userInput.toString())).subscribe(data=>console.log(data))
  }

}
