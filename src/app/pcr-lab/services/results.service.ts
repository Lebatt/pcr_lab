import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { ResUploadResults, uploadResults } from "../models/upload-results.models";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { NotificationService } from "./notifications.service";
import { Notification } from "../models/notification.model";

@Injectable({ providedIn: 'root' })
export class ResultService {

    private readonly uploadEndpoint = environment.apiUrl + '/upload';

    constructor(
        private httpClient: HttpClient,
        private notificationService: NotificationService
    ) {}

    async upload(data: uploadResults) {
        const res: ResUploadResults | HttpErrorResponse = await this.postUpload(data);
        console.log(res);
        if (res) {
            const notification: Notification = {
                title: 'Opereation Success',
                message: 'Your upload was successful, thanks!',
                status: 'alert-success'
            }
            this.notificationService.notification.next(notification);
        }
    }

    private async postUpload(
        data: uploadResults
    ): Promise<ResUploadResults | HttpErrorResponse> {
        try {
            console.log(data);
            //const headers = { 'Authorization': data.token, 'pcr-lab-id': data.pcr_lab_id };
            let headers = new HttpHeaders();
            headers = headers.set('Authorization', 'Bearer ' + data.token);
            headers = headers.set('x-pcr-lab-id', data.pcr_lab_id.toString());
            headers = headers.set('x-api-version', 'v1');
            const res: ResUploadResults = (await lastValueFrom(
                this.httpClient.post<any>(this.uploadEndpoint, {
                    results: data.results
                } , {headers})
          )) as ResUploadResults;
          return res as ResUploadResults | HttpErrorResponse;
        } catch (error: any) {
            const notification: Notification = {
                title: 'Opereation Failure',
                message: 'Your upload was not successful, please try again!',
                status: 'alert-danger'
            }
            this.notificationService.notification.next(notification);
            throw new HttpErrorResponse(error);
        }
    }

}