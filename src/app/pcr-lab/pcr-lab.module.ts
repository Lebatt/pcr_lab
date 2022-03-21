import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { PcrLabRoutingModule } from './pcr-lab-routing.module';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    PcrLabRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ]
})
export class PcrLabModule { }
