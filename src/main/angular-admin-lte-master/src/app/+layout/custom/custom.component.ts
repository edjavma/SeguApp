import { Component, AfterViewInit, OnInit } from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import * as Prism from "prismjs";
import { RiesgoService } from "../../services/riesgo.service";
import { ModalEvaluacionComponent } from "../modal-evaluacion/modal-evaluacion.component";
import { AppService } from "../../services/app.service";
import { GeneralService } from "../../services/general.service";

@Component({
  templateUrl: "./custom.component.html",
  styleUrls: ["./custom.component.css"]
})
export class CustomComponent implements AfterViewInit, OnInit {
  options: NgbModalOptions = { size: "lg" };
  evaluaciones: any = [];
  arquitecturas: any = [];
  selectedRow: any;
  selectedArq: any;

  constructor(
    private riesgoService: RiesgoService,
    private modalService: NgbModal,
    private appService: AppService,
    private generalService: GeneralService
  ) {
    this.selectedArq = 1;
    this.getArquitecturas();
  }

  selected() {
    if (this.selectedArq != -1) {
      this.getEvaluaciones();
    } else {
      window.open("/SeguridadApp/evaluacion/riesgo/download");
    }
  }

  crearEvaluacionRiesgo(tipo: any) {
    const modalRef = this.modalService.open(
      ModalEvaluacionComponent,
      this.options
    );
    modalRef.componentInstance.selectedArq = this.selectedArq;
    if (tipo == "M") {
      modalRef.componentInstance.data = this.selectedRow;
    }
    modalRef.result.then(
      result => {
        this.selectedRow = undefined;
        alert(result);
        this.getEvaluaciones();
      },
      reason => {
        console.log(reason);
      }
    );
  }

  eliminarEvaluacion() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.deleteEvaluacion(this.selectedRow).subscribe(
        response => {
          let data: any = {};
          data = response;
          this.getEvaluaciones();
          alert(data.message);
        },
        error => {
          alert(error);
        }
      );
    });
  }

  ngOnInit() {}

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getEvaluaciones() {
    this.selectedRow = undefined;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.getEvaluaciones(this.selectedArq).subscribe(
        response => {
          this.evaluaciones = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getArquitecturas() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getArquitecturaAplicacion().subscribe(
        response => {
          let values: any = [];
          values = response;
          values.forEach(element => {
            this.arquitecturas.push({
              label: element.nombre,
              value: element.idArquitectura,
              icon: "pi pi-map-marker"
            });
          });
          this.arquitecturas.push({
            label: "Descargar Archivo",
            value: -1,
            icon: "pi pi-arrow-circle-down"
          });

          this.getEvaluaciones();
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
