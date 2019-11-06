import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ConfigurationRoutingModule } from "./configuration-routing.module";
import { ConfigurationComponent } from "./configuration.component";
import { ModalRiesgoComponent } from "../modal-riesgo/modal-riesgo.component";

import { DropdownModule } from "primeng/dropdown";

import { GeneralService } from "../../services/general.service";
import { RiesgoService } from "../../services/riesgo.service";
import { AppConfigModule } from "../../config/app-config.module";

import {
  BoxModule,
  InputGroupModule,
  InputTextModule as mkInputTextModule,
  DropdownModule as mkDropdownModule
} from "angular-admin-lte";

import { TableModule } from "primeng/table";

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    BoxModule,
    FormsModule,
    ReactiveFormsModule,
    mkInputTextModule,
    InputGroupModule,
    TableModule,
    NgbModule.forRoot(),
    mkDropdownModule,
    DropdownModule,
    AppConfigModule
  ],
  declarations: [ConfigurationComponent, ModalRiesgoComponent],
  entryComponents: [ModalRiesgoComponent],
  providers: [GeneralService, RiesgoService]
})
export class ConfigurationModule {}
