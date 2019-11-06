import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

import { AppConfigModule } from "../config/app-config.module";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";

import {
  TabsModule as MkTabsModule,
  BoxModule,
  DropdownModule,
  InputGroupModule,
  InputTextModule as mkInputTextModule
} from "angular-admin-lte";

@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule,
    MkTabsModule,
    BoxModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    mkInputTextModule,
    InputGroupModule,
    AppConfigModule
  ],
  declarations: [TabsComponent],
  providers: [GeneralService, GeneralAddService]
})
export class TabsModule {}
