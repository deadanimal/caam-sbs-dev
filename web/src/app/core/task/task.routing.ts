import { UploadComponent } from './upload/upload.component';
import { Routes } from "@angular/router";
<<<<<<< HEAD
import { DisputeComponent } from './dispute/dispute.component';
import { TflVfrComponent } from './tfl-vfr/tfl-vfr.component';
// import { HistoryComponent } from './history/history.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TaskComponent } from './task/task.component';
=======
import { InvoiceComponent } from "./invoice/invoice.component";
import { InvoiceViewComponent } from "./invoice-view/invoice-view.component";
import { HistoryComponent } from "./history/history.component";
import { HistoryViewComponent } from "./history-view/history-view.component";
import { UploadComponent } from "./upload/upload.component";
>>>>>>> 4c5755635ee90f6432966e7352197d0de2bc7a32

export const TaskRoute: Routes = [
  {
    path: "",
    children: [
<<<<<<< HEAD
      { path: "dispute", component: DisputeComponent },  
      { path: "tfl-vfr", component: TflVfrComponent },   
      { path: "upload", component: UploadComponent },  
      // { path: "data", component: HistoryComponent }, 
      { path: "task", component: TaskComponent }, 
      { path: "generate-invoice", component: InvoiceComponent },             
=======
      { path: "invoice", component: InvoiceComponent },
      { path: "invoice-view", component: InvoiceViewComponent },
      { path: "data", component: HistoryComponent },
      { path: "data-history", component: HistoryViewComponent },
      { path: "data-upload", component: UploadComponent },
>>>>>>> 4c5755635ee90f6432966e7352197d0de2bc7a32
    ],
  },
];
