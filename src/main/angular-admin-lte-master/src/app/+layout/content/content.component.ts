import { Component, AfterViewInit, OnInit } from "@angular/core";

import * as Prism from "prismjs";
import { EstadisticasService } from "../../services/estadisticas.service";

import * as Highcharts from "highcharts";
import { AppService } from "../../services/app.service";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements AfterViewInit, OnInit {
  estadisticas: any = [];
  types: any = [];
  selectedType: any;
  data: any;

  /**
   * @method AfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit() {}

  constructor(
    private estadisticasService: EstadisticasService,
    private appService: AppService
  ) {
    this.getTypes();
    this.selectedType = "1";

    this.getDataEstadisticas();
  }

  selected() {
    this.getDataEstadisticas();
  }

  getDataEstadisticas() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.estadisticasService
        .getEstadisticasTipo(this.selectedType)
        .subscribe(response => {
          this.estadisticas = response;

          Highcharts.chart("containerPie", this.estadisticas.pieChart);
          Highcharts.chart("containerLine", this.estadisticas.lineChart);
        });
    });
  }

  getTypes() {
    this.types = [
      { label: "Tipo de Riesgo", value: "1", icon: "pi pi-map-marker" },
      { label: "Tipo de Impacto", value: "2", icon: "pi pi-tag" },
      { label: "Brecha de Seguridad", value: "3", icon: "pi pi-bookmark" },
      { label: "Tratamiento de Riesgo", value: "4", icon: "pi pi-globe" }
    ];
  }
}
