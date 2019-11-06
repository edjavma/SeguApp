import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneralService } from "../../services/general.service";
import { RiesgoService } from "../../services/riesgo.service";
import { AppService } from "../../services/app.service";

@Component({
  selector: "app-modal-evaluacion",
  templateUrl: "./modal-evaluacion.component.html",
  styleUrls: ["./modal-evaluacion.component.css"]
})
export class ModalEvaluacionComponent implements OnInit {
  @Input() data: any;
  @Input() selectedArq: any;
  evaluacionForm: FormGroup;
  activos: any = [];
  riesgos: any = [];
  clasificaciones: any = [];
  values: any = [1, 2, 3, 4];
  tiposTratamientos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private generalService: GeneralService,
    private riesgoService: RiesgoService,
    private appService: AppService
  ) {
    this.getTipoTratamiento();
  }

  ngOnInit() {
    this.evaluacionForm = this.formBuilder.group({
      correlativo: ["", []],
      idRiesgo: ["", [Validators.required]],
      aplica: ["", []],
      probabilidad: ["", [Validators.required]],
      impacto: ["", [Validators.required]],
      idActivo: ["", [Validators.required]],
      idClasificacion: ["", [Validators.required]],
      idTipoTratamiento: ["", [Validators.required]]
    });

    if (this.data != undefined) {
      this.evaluacionForm.setValue({
        correlativo: this.data.correlativo,
        idRiesgo: this.data.idRiesgo,
        aplica: this.data.aplica,
        probabilidad: this.data.probabilidad,
        impacto: this.data.impacto,
        idActivo: this.data.idActivo,
        idClasificacion: this.data.idClasificacion,
        idTipoTratamiento: this.data.idTipoTratamiento
      });
    }
  }

  onSubmitForm() {
    let data: any = {};
    data = this.evaluacionForm.value;
    data.idArquitectura = {
      idArquitectura: this.selectedArq
    };
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.postEvaluacion(data).subscribe(
        response => {
          let resp: any = {};
          resp = response;
          if (resp.code == 200) {
            this.activeModal.close(resp.message);
          } else {
            alert(resp.message);
          }
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getTipoTratamiento() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoTratamiento().subscribe(
        response => {
          this.tiposTratamientos = response;
          this.getRiesgos();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getRiesgos() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.getRiesgosInUse(this.selectedArq).subscribe(
        response => {
          this.riesgos = response;

          if (this.data != undefined) {
            this.riesgos.push(this.data.idRiesgo);
          }
          this.getActivos();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getActivos() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getActivos().subscribe(
        response => {
          this.activos = response;
          this.getClasificaciones();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getClasificaciones() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getClasificacion().subscribe(
        response => {
          this.clasificaciones = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
