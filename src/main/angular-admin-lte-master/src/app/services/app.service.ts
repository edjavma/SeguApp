import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { APP_CONFIG, AppConfig } from "../config/app-config.module";
import { Router } from "@angular/router";

@Injectable()
export class AppService {
  public urlLogin: string;

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig,
    private Cookie: CookieService,
    private _router: Router
  ) {
    this.urlLogin = config.ENDPOINT + "/SeguridadApp/oauth/token";
  }

  obtainAccessToken(loginData) {
    let params = new HttpParams();
    params = params.set("grant_type", "client_credentials");
    let headers = new HttpHeaders();
    headers = headers.set(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=utf-8"
    );
    headers = headers.set("Authorization", "Basic " + btoa("clientapp:secret"));

    return this.http.post(this.urlLogin, params, {
      headers: headers
    }); /*.subscribe(
      response => {
        this.saveToken(response);
      },
      error => {
        alert("error");
      }
    );*/
  }

  saveToken(token) {
    let expireDate = new Date().getTime() + 1000 * token.expires_in;
    this.Cookie.set("access_token", token.access_token, expireDate);
  }

  isLoggedIn() {
    if (!this.Cookie.check("access_token")) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.Cookie.delete("access_token");
    this._router.navigate(["/login"]);
  }
}
