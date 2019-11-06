import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-clasificacion",
  templateUrl: "./clasificacion.component.html",
  styleUrls: ["./clasificacion.component.css"]
})
export class ClasificacionComponent implements AfterViewInit, OnInit {
  clasificacionForm: FormGroup;
  clasificaciones: any = [];
  /**
   * @method ngAfterViewInit
   */

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.getClasificaciones();
  }

  ngOnInit() {
    this.clasificacionForm = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.clasificacionForm.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postClasificacion(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.getClasificaciones();
          this.clasificacionForm.reset();
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
