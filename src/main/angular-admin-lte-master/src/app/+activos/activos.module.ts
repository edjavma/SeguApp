import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ActivosRoutingModule } from "./activos-routing.module";
import { ActivosComponent } from "./activos.component";

import { AppConfigModule } from "../config/app-config.module";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";

import {
  AccordionModule as MkAccordionModule,
  BoxModule,
  InputGroupModule,
  InputTextModule as mkInputTextModule
} from "angular-admin-lte";

@NgModule({
  imports: [
    CommonModule,
    ActivosRoutingModule,
    MkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BoxModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [ActivosComponent],
  providers: [GeneralService, GeneralAddService]
})
export class ActivosModule {}
