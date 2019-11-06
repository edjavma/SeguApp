import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputTextRoutingModule } from "./input-text-routing.module";
import { InputTextComponent } from "./input-text.component";

import { AppConfigModule } from "../../config/app-config.module";
import { GeneralService } from "../../services/general.service";
import { GeneralAddService } from "../../services/general-add.service";

import {
  InputGroupModule,
  InputTextModule as mkInputTextModule,
  BoxModule
} from "angular-admin-lte";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoxModule,
    InputTextRoutingModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [InputTextComponent],
  providers: [GeneralService, GeneralAddService]
})
export class InputTextModule {}
