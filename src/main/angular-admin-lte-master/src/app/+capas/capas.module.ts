import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CapasRoutingModule } from "./capas-routing.module";
import { CapasComponent } from "./capas.component";

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
    CapasRoutingModule,
    MkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BoxModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [CapasComponent],
  providers: [GeneralService, GeneralAddService]
})
export class CapasModule {}
