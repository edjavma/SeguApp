import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BoxDefaultRoutingModule } from "./box-default-routing.module";
import { BoxDefaultComponent } from "./box-default.component";

import { AppConfigModule } from "../../config/app-config.module";
import { GeneralService } from "../../services/general.service";
import { GeneralAddService } from "../../services/general-add.service";

import {
  BoxModule,
  InputGroupModule,
  InputTextModule as mkInputTextModule
} from "angular-admin-lte";

@NgModule({
  imports: [
    CommonModule,
    BoxDefaultRoutingModule,
    BoxModule,
    FormsModule,
    ReactiveFormsModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [BoxDefaultComponent],
  providers: [GeneralService, GeneralAddService]
})
export class BoxDefaultModule {}
