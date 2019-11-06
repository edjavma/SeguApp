import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DropdownRoutingModule } from "./dropdown-routing.module";
import { DropdownComponent } from "./dropdown.component";

import { AppConfigModule } from "../config/app-config.module";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";

import {
  BoxModule,
  DropdownModule as mkDropdownModule,
  InputGroupModule,
  InputTextModule as mkInputTextModule
} from "angular-admin-lte";

@NgModule({
  imports: [
    CommonModule,
    DropdownRoutingModule,
    BoxModule,
    FormsModule,
    ReactiveFormsModule,
    mkDropdownModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [DropdownComponent],
  providers: [GeneralService, GeneralAddService]
})
export class DropdownModule {}
