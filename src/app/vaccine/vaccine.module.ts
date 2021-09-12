import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineListComponent } from "./vaccine-list/vaccine-list.component";
import { VaccineRoutingModule } from "./vaccine.routing";
import { MaterialModule } from "../material.module";
@NgModule({
  declarations: [VaccineListComponent],
  imports: [
    CommonModule,
    VaccineRoutingModule,
    MaterialModule
  ],
  exports: [  ]
})
export class VaccineModule { }
