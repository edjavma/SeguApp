import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeneralService } from "../../services/general.service";
import { GeneralAddService } from "../../services/general-add.service";
import { AppService } from "../../services/app.service";

@Component({
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.css"]
})
export class InputTextComponent implements OnInit {
  tipoImpacto: FormGroup;
  impactos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.getImpactos();
  }

  ngOnInit() {
    this.tipoImpacto = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.tipoImpacto.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postTipoImpacto(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.getImpactos();
          this.tipoImpacto.reset();
        },
        error => {
          console.log("error" + error);
          alert("Ocurrio un error al guardar");
        }
      );
    });
  }

  getImpactos() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoImpacto().subscribe(
        response => {
          this.impactos = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
