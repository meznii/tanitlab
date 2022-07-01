import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";
import {personModel} from "../models/person-model";
import {ActivatedRoute, Params} from "@angular/router";
import {companyModel} from "../models/company-model";
import {addresseModel} from "../models/addresse-model";


@Component({
  selector: 'app-detailsofpeople',
  templateUrl: './detailsofpeople.component.html',
  styleUrls: ['./detailsofpeople.component.css']
})
export class DetailsofpeopleComponent implements OnInit {
  list: personModel ;
  id: number;


  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (parametre) => {
        this.id = parametre.id;
        console.log(this.id);
      }
    );
    this.apiService.getPeopleByID(this.id).subscribe(
      (res) => {

        this.list = res;
      },
      (error) => {

      });

  }


}
