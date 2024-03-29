import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconRegistry } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule
  ],
  providers: []
})

export class MaterialModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders<MaterialModule> {
    return {
      ngModule: MaterialModule,
      providers: [MatIconRegistry]
    };
  }
}
