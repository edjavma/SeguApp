import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { APP_CONFIG, AppConfig } from "../config/app-config.module";

@Injectable()
export class GeneralService {
  public urlTipoTratamientoGET: string;
  public urlGeneradorRiesgoGET: string;
  public urlResponsableGET: string;
  public urlTipoBrechaGET: string;
  public urlTipoImpactoGET: string;
  public urlTipoRiesgoGET: string;
  public urlClasificacionGET: string;
  public urlArquitecturaAplicacionGET: string;
  public urlActivoGET: string;
  public urlCapasRiesgoGET: string;
  public urlSolucionGET: string;
  data: any = [];

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
    private Cookie: CookieService
  ) {
    this.urlTipoTratamientoGET =
      config.ENDPOINT + "/SeguridadApp/generales/tipo/tratamiento";
    this.urlGeneradorRiesgoGET =
      config.ENDPOINT + "/SeguridadApp/generales/generador/riesgo";
    this.urlResponsableGET =
      config.ENDPOINT + "/SeguridadApp/generales/responsable";
    this.urlTipoBrechaGET =
      config.ENDPOINT + "/SeguridadApp/generales/tipo/brecha";
    this.urlTipoImpactoGET =
      config.ENDPOINT + "/SeguridadApp/generales/tipo/impacto";
    this.urlTipoRiesgoGET =
      config.ENDPOINT + "/SeguridadApp/generales/tipo/riesgo";
    this.urlClasificacionGET =
      config.ENDPOINT + "/SeguridadApp/generales/clasificacion";
    this.urlArquitecturaAplicacionGET =
      config.ENDPOINT + "/SeguridadApp/generales/arqui/app";
    this.urlActivoGET = config.ENDPOINT + "/SeguridadApp/generales/activo";
    this.urlCapasRiesgoGET =
      config.ENDPOINT + "/SeguridadApp/generales/riesgo/capa";
    this.urlSolucionGET = config.ENDPOINT + "/SeguridadApp/generales/solucion";
  }

  getTipoTratamiento() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlTipoTratamientoGET, { headers: headers });
  }

  getTipoRiesgo() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlTipoRiesgoGET, { headers: headers });
  }

  getTipoBrecha() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlTipoBrechaGET, { headers: headers });
  }

  getTipoImpacto() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlTipoImpactoGET, { headers: headers });
  }

  getGeneradorRiesgo() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlGeneradorRiesgoGET, { headers: headers });
  }

  getResponsable() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlResponsableGET, { headers: headers });
  }

  getClasificacion() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlClasificacionGET, { headers: headers });
  }

  getArquitecturaAplicacion() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlArquitecturaAplicacionGET, {
      headers: headers
    });
  }

  getCapasRiesgo() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlCapasRiesgoGET, {
      headers: headers
    });
  }

  getActivos() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlActivoGET, { headers: headers });
  }

  getSoluciones() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlSolucionGET, { headers: headers });
  }
}
