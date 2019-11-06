import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-capas",
  templateUrl: "./capas.component.html",
  styleUrls: ["./capas.component.css"]
})
export class CapasComponent implements AfterViewInit, OnInit {
  capaForm: FormGroup;
  capas: any = [];
  /**
   * @method ngAfterViewInit
   */

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.getCapas();
  }

  ngOnInit() {
    this.capaForm = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.capaForm.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postCapaRiesgo(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.getCapas();
          this.capaForm.reset();
        },
        error => {
          console.log("error" + error);
          alert("Ocurrio un error al guardar");
        }
      );
    });
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getCapas() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getCapasRiesgo().subscribe(
        response => {
          this.capas = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
