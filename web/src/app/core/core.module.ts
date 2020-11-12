import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { HttpClientModule } from "@angular/common/http";
import { Ng9OdometerModule } from "ng9-odometer";
import { NgxSpinnerModule } from "ngx-spinner";

import { RouterModule } from "@angular/router";
import { CoreRoute } from "./core.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";
<<<<<<< HEAD
import { MovementReportComponent } from './movement-report/movement-report.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule,} from 'ngx-bootstrap/modal';
import { CurrencyMaskModule } from "ng2-currency-mask";


=======
import { MasterDataComponent } from './master-data/master-data.component';
>>>>>>> 4c5755635ee90f6432966e7352197d0de2bc7a32

@NgModule({
  declarations: [
    DashboardComponent,
<<<<<<< HEAD
    MovementReportComponent,
=======
    MasterDataComponent,
>>>>>>> 4c5755635ee90f6432966e7352197d0de2bc7a32
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(CoreRoute),
    HttpClientModule,
    NgbModule,
    NgxDatatableModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    TabsModule.forRoot(),
    Ng9OdometerModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot(),
    CurrencyMaskModule,
  ],
  
})
export class CoreModule {}
