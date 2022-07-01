import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {personModel} from "../models/person-model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  list: personModel [] = [];


  constructor(private http: HttpClient) { }

  getPeopleByID(id: number): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + id + '/');
  }
  getPeople(): Observable<personModel[]> {
    return this.http.get<personModel[]>('https://jsonplaceholder.typicode.com/users/');
  }

}
