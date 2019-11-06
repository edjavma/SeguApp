import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements AfterViewInit, OnInit {
  public toggleDropdown = true;
  public toggleDropdown2 = true;
  tipoRiesgo: FormGroup;
  tiposRiesgos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.getTiposRiesgo();
  }

  ngOnInit() {
    this.tipoRiesgo = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.tipoRiesgo.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postTipoRiesgo(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.getTiposRiesgo();
          this.tipoRiesgo.reset();
        },
        error => {
          console.log("error" + error);
          alert("Ocurrio un error al guardar");
        }
      );
    });
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getTiposRiesgo() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoRiesgo().subscribe(
        response => {
          this.tiposRiesgos = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
