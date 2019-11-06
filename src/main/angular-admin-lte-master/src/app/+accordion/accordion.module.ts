import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccordionRoutingModule } from "./accordion-routing.module";
import { AccordionComponent } from "./accordion.component";

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
    AccordionRoutingModule,
    MkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BoxModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [AccordionComponent],
  providers: [GeneralService, GeneralAddService]
})
export class AccordionModule {}
