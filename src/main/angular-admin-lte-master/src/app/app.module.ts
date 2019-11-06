import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { OAuthModule } from "angular-oauth2-oidc";
import { adminLteConf } from "./admin-lte.conf";

import { AppConfigModule } from "./config/app-config.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { CookieService } from "ngx-cookie-service";
import { AppService } from "./services/app.service";

import { LayoutModule } from "angular-admin-lte";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { LoadingPageModule, MaterialBarModule } from "angular-loading-page";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule,
    MaterialBarModule,
    AppConfigModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [CookieService, AppService]
})
export class AppModule {}
