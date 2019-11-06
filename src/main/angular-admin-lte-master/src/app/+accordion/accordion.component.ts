import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"]
})
export class AccordionComponent implements AfterViewInit, OnInit {
  public activeIndex: any = 0;
  tipoTratamiento: FormGroup;
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
    this.tipoTratamiento = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);

      data.nombre = this.tipoTratamiento.value.nombre;
      this.generalAddService.postTipoTratamiento(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.ngGetData();
          this.tipoTratamiento.reset();
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
      this.generalService.getTipoTratamiento().subscribe(
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
