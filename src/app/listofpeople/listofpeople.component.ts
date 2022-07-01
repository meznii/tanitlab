import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {personModel} from "../models/person-model";

@Component({
  selector: 'app-listofpeople',
  templateUrl: './listofpeople.component.html',
  styleUrls: ['./listofpeople.component.css']
})
export class ListofpeopleComponent implements OnInit {
  result : any;
  list: personModel [] = [];



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPeople().subscribe(
      (res) => {
        this.list = res;
        console.log(this.list);
      },
      (error) => {

      });
  }

}
