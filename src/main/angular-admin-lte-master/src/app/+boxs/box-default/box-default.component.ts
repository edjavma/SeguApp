import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../../services/general.service";
import { GeneralAddService } from "../../services/general-add.service";
import { AppService } from "../../services/app.service";

@Component({
  templateUrl: "./box-default.component.html",
  styleUrls: ["./box-default.component.css"]
})
export class BoxDefaultComponent implements AfterViewInit, OnInit {
  responsableForm: FormGroup;
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
    this.responsableForm = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.responsableForm.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postResponsable(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.ngGetData();
          this.responsableForm.reset();
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
      this.generalService.getResponsable().subscribe(
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
