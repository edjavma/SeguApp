import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SolucionRoutingModule } from "./solucion-routing.module";
import { SolucionComponent } from "./solucion.component";

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
    SolucionRoutingModule,
    MkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BoxModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [SolucionComponent],
  providers: [GeneralService, GeneralAddService]
})
export class SolucionModule {}
