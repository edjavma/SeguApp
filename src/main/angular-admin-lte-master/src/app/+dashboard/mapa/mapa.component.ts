import { Component, AfterViewInit, OnInit } from "@angular/core";

import * as Prism from "prismjs";
import { EstadisticasService } from "../../services/estadisticas.service";

import * as Highcharts from "highcharts";
import { AppService } from "../../services/app.service";
import { GeneralService } from "../../services/general.service";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements AfterViewInit, OnInit {
  estadisticas: any = [];
  types: any = [];
  filtro: any;
  data: any;
  arquitecturas: any = [];

  /**
   * @method AfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit() {}

  constructor(
    private estadisticasService: EstadisticasService,
    private appService: AppService,
    private generalService: GeneralService
  ) {
    this.getTypes();
    this.filtro = {};
    this.filtro.idArquitectura = 0;
    this.getArquitecturas();
    this.getDataEstadisticas();
  }

  selected() {
    this.getDataEstadisticas();
  }

  getArquitecturas() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getArquitecturaAplicacion().subscribe(
        response => {
          let data: any = [];
          data = response;
          this.arquitecturas.push({
            idArquitectura: 0,
            nombre: "Seleccione una arquitectura"
          });
          data.forEach(element => {
            this.arquitecturas.push(element);
          });
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getDataEstadisticas() {
    let data: any = {};
    if (this.filtro.idArquitectura == undefined) {
      data.idArquitectura = null;
    } else if (this.filtro.idArquitectura == 0) {
      data.idArquitectura = null;
    } else {
      data.idArquitectura = this.filtro.idArquitectura;
    }

    console.log(data);
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.estadisticasService.getEstadisticasMapa(data).subscribe(response => {
        this.estadisticas = response;
        Highcharts.chart("containerPie", this.estadisticas.pieChart);
        Highcharts.chart("containerBar", this.estadisticas.barChart);
        Highcharts.chart("containerRadar", this.estadisticas.radarChart);
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
