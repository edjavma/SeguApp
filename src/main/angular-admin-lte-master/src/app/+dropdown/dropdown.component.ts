import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as Prism from "prismjs";
import { GeneralService } from "../services/general.service";
import { GeneralAddService } from "../services/general-add.service";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements AfterViewInit, OnInit {
  brechaForm: FormGroup;
  brechas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private generalAddService: GeneralAddService,
    private appService: AppService
  ) {
    this.getBrechas();
  }

  ngOnInit() {
    this.brechaForm = this.formBuilder.group({
      nombre: ["", [Validators.required]]
    });
  }

  onSubmitForm() {
    let data: any = {};
    data.nombre = this.brechaForm.value.nombre;
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalAddService.postTipoBrecha(data).subscribe(
        response => {
          let value: any = {};
          value = response;
          alert(value.message);
          this.getBrechas();
          this.brechaForm.reset();
        },
        error => {
          console.log("error" + error);
          alert("Ocurrio un error al guardar");
        }
      );
    });
  }
  /**
   *
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  getBrechas() {
    this.appService.obtainAccessToken(null).subscribe(response => {
      this.appService.saveToken(response);
      this.generalService.getTipoBrecha().subscribe(
        response => {
          this.brechas = response;
        },
        error => {
          alert(error);
        }
      );
    });
  }
}
