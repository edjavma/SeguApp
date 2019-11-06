import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneralService } from "../../services/general.service";
import { RiesgoService } from "../../services/riesgo.service";
import { AppService } from "../../services/app.service";

@Component({
  selector: "app-modal-tratamiento",
  templateUrl: "./modal-tratamiento.component.html",
  styleUrls: ["./modal-tratamiento.component.css"]
})
export class ModalTratamientoComponent implements OnInit {
  @Input() data: any;
  tratamientoForm: FormGroup;
  values: any;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private generalService: GeneralService,
    private riesgoService: RiesgoService,
    private appService: AppService
  ) {
    this.values = {};
    this.values.source = [];
    this.values.target = [];
  }

  ngOnInit() {
    this.getSoluciones();
  }

  getSoluciones() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService
        .getTratamientoSolucion(this.data.correlativo)
        .subscribe(
          response => {
            this.values = response;
          },
          error => {
            alert(error);
          }
        );
    });
  }

  saveSoluciones() {
    let data: any = {};
    data.source = this.values.source;
    data.target = this.values.target;
    data.id = this.data.correlativo;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.postTratamientoSolucion(data).subscribe(
        response => {
          let resp: any = {};
          resp = response;
          this.getSoluciones();
          alert(resp.message);
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
