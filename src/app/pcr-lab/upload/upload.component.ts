import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { uploadForm } from '../forms/upload.form';
import { CreateUploadResultDto } from '../models/upload-results.models';
import { ResultService } from '../services/results.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = uploadForm;
  options: FormlyFormOptions = {};

  constructor(
    private resultsService: ResultService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(model: any) {
    const labID = model.pcr_lab_id;
    const token = model.token;

    this.resultsService.upload({
      pcr_lab_id: model.pcr_lab_id,
      token: model.token,
      results: [
        model
      ]
    });
  }

  reset()
  {
    this.model = {};
  }

}
