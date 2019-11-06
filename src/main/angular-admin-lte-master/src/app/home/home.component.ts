import { Component, AfterViewInit, OnInit } from "@angular/core";
import { AppService } from "../services/app.service";
import * as Prism from "prismjs";
import { RiesgoService } from "../services/riesgo.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [RiesgoService, AppService]
})
export class HomeComponent implements AfterViewInit, OnInit {
  clasificaciones: any = [];

  constructor(
    private riesgoService: RiesgoService,
    private appService: AppService
  ) {
    this.getClasificacionesRiesgo();
  }

  ngOnInit() {}

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getClasificacionesRiesgo() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.getClasificacionesRiesgo().subscribe(response => {
        this.clasificaciones = response;
      });
    });
  }

  getNivel(value) {
    let ret: string = "";
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.getClasificacion("calc", value).subscribe(response => {
        let data: any = {};
        data = response;
        ret = data.nombre;
      });
    });

    return ret;
  }
}
