import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/pcr-lab/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });
   }

  ngOnInit(): void {
  }

}
