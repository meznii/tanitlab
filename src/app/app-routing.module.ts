import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListofpeopleComponent} from "./listofpeople/listofpeople.component";
import {DetailsofpeopleComponent} from "./detailsofpeople/detailsofpeople.component";

const routes: Routes = [
  { path: 'list', component: ListofpeopleComponent },
  { path: 'details/:id', component: DetailsofpeopleComponent },
  { path: '**', component: ListofpeopleComponent },  //  route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
