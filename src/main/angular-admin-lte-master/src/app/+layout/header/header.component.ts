import { Component, AfterViewInit } from "@angular/core";
import { RiesgoService } from "../../services/riesgo.service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import * as Prism from "prismjs";
import { AppService } from "../../services/app.service";
import { GeneralService } from "../../services/general.service";
import { ModalTratamientoComponent } from "../modal-tratamiento/modal-tratamiento.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements AfterViewInit {
  options: NgbModalOptions = { size: "lg" };
  tratamientos: any = [];
  selectedArq: any;
  selectedRow: any;
  arquitecturas: any = [];

  constructor(
    private riesgoService: RiesgoService,
    private appService: AppService,
    private generalService: GeneralService,
    private modalService: NgbModal
  ) {
    this.selectedArq = 1;
    this.getArquitecturas();
  }

  crearTratamientoRiesgo() {
    const modalRef = this.modalService.open(
      ModalTratamientoComponent,
      this.options
    );
    modalRef.componentInstance.data = this.selectedRow;
    modalRef.result.then(
      result => {
        this.selectedRow = undefined;
        alert(result);
        this.getTratamiento();
      },
      reason => {
        console.log(reason);
      }
    );
  }

  selected() {
    if (this.selectedArq != -1) {
      this.getTratamiento();
    } else {
      window.open("/SeguridadApp/tratamiento/riesgo/download");
    }
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getTratamiento() {
    this.selectedRow = undefined;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.getEvaluacionesAplica(this.selectedArq).subscribe(
        response => {
          this.tratamientos = response;
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
          this.getTratamiento();
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
