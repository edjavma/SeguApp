import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneralService } from "../../services/general.service";
import { RiesgoService } from "../../services/riesgo.service";
import { AppService } from "../../services/app.service";

@Component({
  selector: "app-modal-riesgo",
  templateUrl: "./modal-riesgo.component.html",
  styleUrls: ["./modal-riesgo.component.css"]
})
export class ModalRiesgoComponent implements OnInit {
  @Input() data: any;
  riesgoForm: FormGroup;
  tiposRiesgo: any = [];
  tiposImpacto: any = [];
  tiposBrecha: any = [];
  capas: any = [];
  responsables: any = [];
  generadoresRiesgo: any = [];

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private generalService: GeneralService,
    private riesgoService: RiesgoService,
    private appService: AppService
  ) {
    this.getTipoRiesgo();
  }

  ngOnInit() {
    this.riesgoForm = this.formBuilder.group({
      idRiesgo: ["", []],
      nombre: ["", [Validators.required]],
      idTipoRiesgo: ["", [Validators.required]],
      idTipoImpacto: ["", [Validators.required]],
      idTipoBrecha: ["", [Validators.required]],
      idRiesgoCapa: ["", [Validators.required]],
      idResponsable: ["", [Validators.required]],
      idGeneradorRiesgo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      causa: ["", [Validators.required]],
      consecuencias: ["", [Validators.required]],
      accionCorrectiva: ["", [Validators.required]]
    });

    if (this.data != undefined) {
      this.riesgoForm.setValue({
        idRiesgo: this.data.idRiesgo,
        nombre: this.data.nombre,
        idTipoRiesgo: this.data.idTipoRiesgo,
        idTipoImpacto: this.data.idTipoImpacto,
        idTipoBrecha: this.data.idTipoBrecha,
        idRiesgoCapa: this.data.idRiesgoCapa,
        idResponsable: this.data.idResponsable,
        idGeneradorRiesgo: this.data.idGeneradorRiesgo,
        descripcion: this.data.descripcion,
        causa: this.data.causa,
        consecuencias: this.data.consecuencias,
        accionCorrectiva: this.data.accionCorrectiva
      });
    }
  }

  onSubmitForm() {
    let data: any = {};
    data = this.riesgoForm.value;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.riesgoService.postRiesgo(data).subscribe(
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

  getTipoRiesgo() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoRiesgo().subscribe(
        response => {
          this.tiposRiesgo = response;
          this.getTipoImpactos();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getTipoImpactos() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoImpacto().subscribe(
        response => {
          this.tiposImpacto = response;
          this.getTipoBrecha();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getTipoBrecha() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoBrecha().subscribe(
        response => {
          this.tiposBrecha = response;
          this.getCapas();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getCapas() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getCapasRiesgo().subscribe(
        response => {
          this.capas = response;
          this.getResponsables();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getResponsables() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getResponsable().subscribe(
        response => {
          this.responsables = response;
          this.getGeneradoresRiesgo();
        },
        error => {
          alert(error);
        }
      );
    });
  }

  getGeneradoresRiesgo() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getGeneradorRiesgo().subscribe(
        response => {
          this.generadoresRiesgo = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
