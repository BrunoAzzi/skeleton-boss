import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCard, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
  MdTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,

    MdDialogModule,
    MdInputModule,
    MdSelectModule,
    MdInputModule,
    MdTooltipModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule
  ],
  exports: [
    FlexLayoutModule,

    MdDialogModule,
    MdInputModule,
    MdSelectModule,
    MdTooltipModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
