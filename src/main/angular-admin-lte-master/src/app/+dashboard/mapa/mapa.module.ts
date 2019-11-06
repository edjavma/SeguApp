import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapaRoutingModule } from "./mapa-routing.module";
import { MapaComponent } from "./mapa.component";

import { BoxModule } from "angular-admin-lte";
import { ChartModule } from "primeng/chart";
import { SelectButtonModule } from "primeng/selectbutton";

import { AppConfigModule } from "../../config/app-config.module";
import { EstadisticasService } from "../../services/estadisticas.service";
import { GeneralService } from "../../services/general.service";

@NgModule({
  imports: [
    CommonModule,
    SelectButtonModule,
    MapaRoutingModule,
    BoxModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    AppConfigModule
  ],
  declarations: [MapaComponent],
  providers: [EstadisticasService, GeneralService]
})
export class MapaModule {}
