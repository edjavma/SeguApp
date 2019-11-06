import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-solucion",
  templateUrl: "./solucion.component.html",
  styleUrls: ["./solucion.component.css"]
})
export class SolucionComponent implements AfterViewInit, OnInit {
  public activeIndex: any = 0;
  solucionForm: FormGroup;
  data: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.ngGetData();
  }

  ngOnInit() {
    this.solucionForm = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);

      data.nombre = this.solucionForm.value.nombre;
      this.generalAddService.postSolucion(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.ngGetData();
          this.solucionForm.reset();
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
      this.generalService.getSoluciones().subscribe(
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
