import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { StateListComponent } from "./state-list/state-list.component";

const routes: Routes = [
  {
    path: "",
    component:StateListComponent,
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
export class StateRoutingModule {}
