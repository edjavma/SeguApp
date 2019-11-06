import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TipoRoutingModule } from "./tipo-routing.module";
import { TipoComponent } from "./tipo.component";

import { BoxModule } from "angular-admin-lte";
import { ChartModule } from "primeng/chart";
import { SelectButtonModule } from "primeng/selectbutton";

import { AppConfigModule } from "../../config/app-config.module";
import { EstadisticasService } from "../../services/estadisticas.service";

@NgModule({
  imports: [
    CommonModule,
    SelectButtonModule,
    TipoRoutingModule,
    BoxModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    AppConfigModule
  ],
  declarations: [TipoComponent],
  providers: [EstadisticasService]
})
export class TipoModule {}
