import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements AfterViewInit, OnInit {
  generadorRiesgo: FormGroup;
  data: any = [];
  /**
   * @method ngAfterViewInit
   */

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.ngGetData();
  }

  ngOnInit() {
    this.generadorRiesgo = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.generadorRiesgo.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postGeneradorRiesgo(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.ngGetData();
          this.generadorRiesgo.reset();
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

  ngGetData() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getGeneradorRiesgo().subscribe(
        response => {
          this.data = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
