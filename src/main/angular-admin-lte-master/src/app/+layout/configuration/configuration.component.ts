import { Component, AfterViewInit, OnInit } from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { ModalRiesgoComponent } from "../modal-riesgo/modal-riesgo.component";
import * as Prism from "prismjs";
import { RiesgoService } from "../../services/riesgo.service";
import { AppService } from "../../services/app.service";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["../modal-riesgo/modal-riesgo.component.css"]
})
export class ConfigurationComponent implements AfterViewInit, OnInit {
  options: NgbModalOptions = { size: "lg" };
  riesgos: any = [];
  selectedRow: any;

  constructor(
    private modalService: NgbModal,
    private riesgoService: RiesgoService,
    private appService: AppService
  ) {
    this.getRiesgos();
  }

  crearRiesgo(tipo: any) {
    const modalRef = this.modalService.open(ModalRiesgoComponent, this.options);
    if (tipo == "M") {
      modalRef.componentInstance.data = this.selectedRow;
    }
    modalRef.result.then(
      result => {
        this.selectedRow = undefined;
        alert(result);
        this.getRiesgos();
      },
      reason => {
        console.log(reason);
      }
    );
  }

  eliminarRiesgo() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.deleteRiesgo(this.selectedRow).subscribe(
        response => {
          let data: any = {};
          data = response;
          this.getRiesgos();
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

  getRiesgos() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.getRiesgos().subscribe(
        response => {
          this.riesgos = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
