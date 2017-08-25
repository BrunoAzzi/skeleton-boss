import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropdownModule, InputTextModule } from 'primeng/primeng';

@NgModule({
  imports: [
    FlexLayoutModule,
    DropdownModule,
    InputTextModule,
  ],
  exports: [
    FlexLayoutModule,
    DropdownModule,
    InputTextModule,
  ],
  declarations: []
})
export class PrimeNgModule { }
