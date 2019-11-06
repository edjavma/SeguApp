import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomRoutingModule } from "./custom-routing.module";
import { CustomComponent } from "./custom.component";
import { ModalEvaluacionComponent } from "../modal-evaluacion/modal-evaluacion.component";

import { BoxModule } from "angular-admin-lte";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { ToggleButtonModule } from "primeng/togglebutton";
import { SelectButtonModule } from "primeng/selectbutton";

import { GeneralService } from "../../services/general.service";
import { RiesgoService } from "../../services/riesgo.service";
import { AppConfigModule } from "../../config/app-config.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomRoutingModule,
    BoxModule,
    AppConfigModule,
    TableModule,
    DropdownModule,
    NgbModule.forRoot(),
    ToggleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule
  ],
  declarations: [CustomComponent, ModalEvaluacionComponent],
  entryComponents: [ModalEvaluacionComponent],
  providers: [GeneralService, RiesgoService]
})
export class CustomModule {}
