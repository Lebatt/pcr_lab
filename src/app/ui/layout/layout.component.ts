import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/pcr-lab/models/notification.model';
import { LoaderService } from 'src/app/pcr-lab/services/loader.service';
import { NotificationService } from 'src/app/pcr-lab/services/notifications.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loading: boolean = true;
  notification: Notification | null = null;

  constructor(
    private loaderService: LoaderService,
    private notifiactionService: NotificationService
  ) {
    this.loaderService.isLoading.subscribe((isLoading) => {
      this.loading = isLoading;
    });

    this.notifiactionService.notification.subscribe((result) => {
        this.notification = result;
    })
   }

  ngOnInit(): void {
  }

  dissmissNotification()
  {
    this.notifiactionService.notification.next(null);
  }

}
