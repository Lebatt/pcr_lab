import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ResUploadResults, uploadResults } from "../models/upload-results.models";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ResultService {

    private readonly uploadEndpoint = environment.apiUrl + '/upload';

    constructor(private httpClient: HttpClient) {}

    async upload(data: uploadResults) {
        console.log(data);
        const res: ResUploadResults | HttpErrorResponse = await this.postUpload(data);
        if (res) {
            // do smth
        }
    }

    private async postUpload(
        data: uploadResults
    ): Promise<ResUploadResults | HttpErrorResponse> {
        try {
            const headers = { 'Authorization': data.token, 'pcr-lab-id': data.pcr_lab_id };
            const res: ResUploadResults = (await lastValueFrom(
                this.httpClient.post<any>(this.uploadEndpoint, {
                    results: data.results
                } , {headers})
          )) as ResUploadResults;
          return res as ResUploadResults | HttpErrorResponse;
        } catch (error: any) {
            console.log(error);
            throw new HttpErrorResponse(error);
        }
    }

}