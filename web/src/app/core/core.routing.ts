import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
<<<<<<< HEAD
import { MovementReportComponent } from './movement-report/movement-report.component';
=======
import { MasterDataComponent } from "./master-data/master-data.component";
>>>>>>> 4c5755635ee90f6432966e7352197d0de2bc7a32

export const CoreRoute: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "database",
        loadChildren: () =>
          import("./database/database.module").then((m) => m.DatabaseModule),
      },
      {
        path: "task",
        loadChildren: () =>
          import("./task/task.module").then((m) => m.TaskModule),
      },
      {
<<<<<<< HEAD
        path: "finance",
        loadChildren: () =>
          import("./finance/finance.module").then((m) => m.FinanceModule),
      },
      {
        path: "movement-report",
        component: MovementReportComponent,
      },
      {
        path: "billing",
        loadChildren: () =>
          import("./billing/billing.module").then((m) => m.BillingModule),
      },
      {
        path: "payment",
        loadChildren: () =>
          import("./payment/payment.module").then((m) => m.PaymentModule),
=======
        path: "master-data",
        component: MasterDataComponent,
>>>>>>> 4c5755635ee90f6432966e7352197d0de2bc7a32
      },
    ],
  },
];
