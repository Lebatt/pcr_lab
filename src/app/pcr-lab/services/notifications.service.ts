import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Notification } from "../models/notification.model";

@Injectable({ providedIn: 'root' })
export class NotificationService 
{

    public notification = new BehaviorSubject<Notification | null>(null);
    constructor() { }
}