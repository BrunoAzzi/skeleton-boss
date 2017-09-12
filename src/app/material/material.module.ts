import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCard, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdSelectModule,
  MdSnackBarModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,

    MdMenuModule,
    MdDialogModule,
    MdSelectModule,
    MdInputModule,
    MdTooltipModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdSnackBarModule,
    MdListModule,
    MdToolbarModule,
  ],
  exports: [
    FlexLayoutModule,

    MdMenuModule,
    MdDialogModule,
    MdSelectModule,
    MdTooltipModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule,
    MdListModule,
    MdToolbarModule,
  ],
  declarations: []
})
export class MaterialModule { }
