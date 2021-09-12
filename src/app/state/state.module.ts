import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateListComponent } from "./state-list/state-list.component";
import { StateRoutingModule } from "./state.routing";
import { MaterialModule } from "../material.module";
@NgModule({
  declarations: [StateListComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    MaterialModule
  ],
  exports: [  ]
})
export class StateModule { }
