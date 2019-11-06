import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { APP_CONFIG, AppConfig } from "../config/app-config.module";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class EstadisticasService {
  public urlDashboardGET: string;
  public urlDashboardMapaGET: string;
  data: any = {};

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
    private Cookie: CookieService
  ) {
    this.urlDashboardGET = config.ENDPOINT + "/SeguridadApp/dashboard/generar";
    this.urlDashboardMapaGET =
      config.ENDPOINT + "/SeguridadApp/dashboard/generar/mapa";
  }

  getEstadisticasTipo(selectedType: any) {
    let params = new HttpParams();
    params = params.set("selectedType", selectedType);
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlDashboardGET, {
      params: params,
      headers: headers
    });
  }

  getEstadisticasMapa(filtro: any) {
    let params = new HttpParams();
    if (filtro.idArquitectura != null) {
      params = params.set("idArquitectura", filtro.idArquitectura);
    }
    let headers = new HttpHeaders();
    headers = headers.set(
      "Authorization",
      "Bearer " + this.Cookie.get("access_token")
    );
    return this.http.get(this.urlDashboardMapaGET, {
      params: params,
      headers: headers
    });
  }
}
