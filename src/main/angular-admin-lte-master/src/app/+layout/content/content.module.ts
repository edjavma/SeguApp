import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContentRoutingModule } from "./content-routing.module";
import { ContentComponent } from "./content.component";

import { BoxModule } from "angular-admin-lte";
import { ChartModule } from "primeng/chart";
import { SelectButtonModule } from "primeng/selectbutton";

import { AppConfigModule } from "../../config/app-config.module";
import { EstadisticasService } from "../../services/estadisticas.service";

@NgModule({
  imports: [
    CommonModule,
    SelectButtonModule,
    ContentRoutingModule,
    BoxModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    AppConfigModule
  ],
  declarations: [ContentComponent],
  providers: [EstadisticasService]
})
export class ContentModule {}
