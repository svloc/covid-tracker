import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: "home",
    component:HomeComponent,
  },
  { path: 'state', loadChildren: () => import('./state/state.module').then(m => m.StateModule) },
  { path: 'vaccine', loadChildren: () => import('./vaccine/vaccine.module').then(m => m.VaccineModule) },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
