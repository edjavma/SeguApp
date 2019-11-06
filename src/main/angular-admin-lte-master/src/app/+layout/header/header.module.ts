import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderRoutingModule } from "./header-routing.module";
import { HeaderComponent } from "./header.component";
import { ModalTratamientoComponent } from "../modal-tratamiento/modal-tratamiento.component";

import { BoxModule } from "angular-admin-lte";
import { TableModule } from "primeng/table";
import { SelectButtonModule } from "primeng/selectbutton";
import { PickListModule } from "primeng/picklist";

import { GeneralService } from "../../services/general.service";
import { RiesgoService } from "../../services/riesgo.service";
import { AppConfigModule } from "../../config/app-config.module";

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    TableModule,
    BoxModule,
    AppConfigModule,
    SelectButtonModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    PickListModule
  ],
  declarations: [HeaderComponent, ModalTratamientoComponent],
  entryComponents: [ModalTratamientoComponent],
  providers: [GeneralService, RiesgoService]
})
export class HeaderModule {}
