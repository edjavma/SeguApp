import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AlertRoutingModule } from "./alert-routing.module";
import { AlertComponent } from "./alert.component";

import { AppConfigModule } from "../config/app-config.module";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";

import {
  AlertModule as MkAlertModule,
  BoxModule,
  InputGroupModule,
  InputTextModule as mkInputTextModule
} from "angular-admin-lte";

@NgModule({
  imports: [
    CommonModule,
    AlertRoutingModule,
    MkAlertModule,
    BoxModule,
    FormsModule,
    ReactiveFormsModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [AlertComponent],
  providers: [GeneralService, GeneralAddService]
})
export class AlertModule {}
