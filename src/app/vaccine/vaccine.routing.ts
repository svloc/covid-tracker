import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { VaccineListComponent } from "./vaccine-list/vaccine-list.component";

const routes: Routes = [
  {
    path: "",
    component:VaccineListComponent,
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class VaccineRoutingModule {}
