import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { APP_CONFIG, AppConfig } from "../config/app-config.module";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class RiesgoService {
  public urlriesgoGET: string;
  public urlriesgoInUseGET: string;
  public urlriesgoPOST: string;

  public urlClasificacionRiesgoGET: string;
  public urlFindClasificacionRiesgoGET: string;

  public urlEvaluacionGET: string;
  public urlEvaluacionAplicaGET: string;
  public urlEvaluacionPOST: string;
  public urlTratamientoPOST: string;

  public urlEvaluacionDELETE: string;
  public urlRiesgoDELETE: string;
  public urlTratamientoDELETE: string;

  public urlTratamientoSolucionGET: string;
  public urlTratamientoSolucionPOST: string;
  data: any = [];

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
    private Cookie: CookieService
  ) {
    this.urlriesgoGET = config.ENDPOINT + "/SeguridadApp/riesgo/list";
    this.urlriesgoInUseGET =
      config.ENDPOINT + "/SeguridadApp/riesgo/list/not/use";
    this.urlriesgoPOST = config.ENDPOINT + "/SeguridadApp/riesgo/save";

    this.urlClasificacionRiesgoGET =
      config.ENDPOINT + "/SeguridadApp/riesgo/list/clasificacion";
    this.urlFindClasificacionRiesgoGET =
      config.ENDPOINT + "/SeguridadApp/riesgo/clasificacion";

    this.urlEvaluacionGET =
      config.ENDPOINT + "/SeguridadApp/evaluacion/riesgo/list";
    this.urlEvaluacionAplicaGET =
      config.ENDPOINT + "/SeguridadApp/evaluacion/riesgo/list/evaluados";
    this.urlEvaluacionPOST =
      config.ENDPOINT + "/SeguridadApp/evaluacion/riesgo/save";
    this.urlTratamientoPOST =
      config.ENDPOINT + "/SeguridadApp/tratamiento/riesgo/save";

    this.urlEvaluacionDELETE =
      config.ENDPOINT + "/SeguridadApp/evaluacion/riesgo/delete";
    this.urlTratamientoDELETE =
      config.ENDPOINT + "/SeguridadApp/tratamiento/riesgo/delete";
    this.urlRiesgoDELETE = config.ENDPOINT + "/SeguridadApp/riesgo/delete";

    this.urlTratamientoSolucionGET =
      config.ENDPOINT + "/SeguridadApp/tratamiento/riesgo/picklist";
    this.urlTratamientoSolucionPOST =
      config.ENDPOINT + "/SeguridadApp/tratamiento/riesgo/picklist/save";
  }

  getClasificacionesRiesgo() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlClasificacionRiesgoGET, { headers: headers });
  }

  getClasificacion(tipo: any, value: any) {
    let params = new HttpParams();
    params = params.set("tipo", tipo);
    params = params.set("value", value);
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlFindClasificacionRiesgoGET, {
      params: params,
      headers: headers
    });
  }

  getRiesgos() {
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlriesgoGET, { headers: headers });
  }

  getRiesgosInUse(selectedArq: any) {
    let params = new HttpParams();
    params = params.set("selectedArq", selectedArq);
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlriesgoInUseGET, {
      headers: headers,
      params: params
    });
  }

  getEvaluaciones(selectedArq: any) {
    let params = new HttpParams();
    params = params.set("selectedArq", selectedArq);
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlEvaluacionGET, {
      headers: headers,
      params: params
    });
  }

  getEvaluacionesAplica(selectedArq: any) {
    let params = new HttpParams();
    params = params.set("selectedArq", selectedArq);
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlEvaluacionAplicaGET, {
      headers: headers,
      params: params
    });
  }

  postRiesgo(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlriesgoPOST, data, { headers: headers });
  }

  postEvaluacion(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlEvaluacionPOST, data, { headers: headers });
  }
  postTratamiento(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTratamientoPOST, data, { headers: headers });
  }

  deleteEvaluacion(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlEvaluacionDELETE, data, { headers: headers });
  }

  deleteRiesgo(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlRiesgoDELETE, data, { headers: headers });
  }

  deleteTratamiento(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTratamientoDELETE, data, {
      headers: headers
    });
  }

  getTratamientoSolucion(correlativo: any) {
    let params = new HttpParams();
    params = params.set("correlativo", correlativo);
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlTratamientoSolucionGET, {
      headers: headers,
      params: params
    });
  }

  postTratamientoSolucion(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTratamientoSolucionPOST, data, {
      headers: headers
    });
  }
}
