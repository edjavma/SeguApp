import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { APP_CONFIG, AppConfig } from "../config/app-config.module";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class GeneralAddService {
  public urlTipoTratamientoPOST: string;
  public urlGeneradorRiesgoPOST: string;
  public urlResponsablePOST: string;
  public urlTipoBrechaPOST: string;
  public urlTipoImpactoPOST: string;
  public urlTipoRiesgoPOST: string;
  public urlClasificacionPOST: string;
  public urlActivoPOST: string;
  public urlCapasRiesgoPOST: string;
  public urlSolucionPOST: string;

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
    private Cookie: CookieService
  ) {
    this.urlTipoTratamientoPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/tipo/tratamiento";
    this.urlGeneradorRiesgoPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/generador/riesgo";
    this.urlResponsablePOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/responsable";
    this.urlTipoBrechaPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/tipo/brecha";
    this.urlTipoImpactoPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/tipo/impacto";
    this.urlTipoRiesgoPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/tipo/riesgo";
    this.urlClasificacionPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/clasificacion";
    this.urlActivoPOST = config.ENDPOINT + "/SeguridadApp/generales/add/activo";
    this.urlCapasRiesgoPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/riesgo/capa";
    this.urlSolucionPOST =
      config.ENDPOINT + "/SeguridadApp/generales/add/solucion";
  }

  postTipoTratamiento(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTipoTratamientoPOST, data, {
      headers: headers
    });
  }

  postTipoRiesgo(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTipoRiesgoPOST, data, { headers: headers });
  }

  postTipoBrecha(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTipoBrechaPOST, data, { headers: headers });
  }

  postTipoImpacto(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlTipoImpactoPOST, data, { headers: headers });
  }

  postGeneradorRiesgo(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlGeneradorRiesgoPOST, data, {
      headers: headers
    });
  }

  postResponsable(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlResponsablePOST, data, { headers: headers });
  }

  postClasificacion(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlClasificacionPOST, data, {
      headers: headers
    });
  }

  postActivos(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlActivoPOST, data, { headers: headers });
  }

  postCapaRiesgo(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlCapasRiesgoPOST, data, { headers: headers });
  }

  postSolucion(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=UTF-8");
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.post(this.urlSolucionPOST, data, { headers: headers });
  }
}
