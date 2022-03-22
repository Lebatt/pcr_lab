export interface Notification 
{
    title: string;
    message: string;
    status: 'alert-warning' | 'alert-success' | 'alert-danger';
}