import { Component, AfterViewInit, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective
} from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-activos",
  templateUrl: "./activos.component.html",
  styleUrls: ["./activos.component.css"]
})
export class ActivosComponent implements AfterViewInit, OnInit {
  public activeIndex: any = 0;
  activoForm: FormGroup;
  activos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.ngGetData();
  }

  ngOnInit() {
    this.activoForm = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm(formData: any, formDirective: FormGroupDirective) {
    let data: any = {};
    data.nombre = this.activoForm.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postActivos(data).subscribe(
        response => {
          console.log(response);
          let value: any = {};
          value = response;
          alert(value.message);
          this.ngGetData();
          formDirective.resetForm();
          formData.reset();
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

  ngGetData() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getActivos().subscribe(
        response => {
          this.activos = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
