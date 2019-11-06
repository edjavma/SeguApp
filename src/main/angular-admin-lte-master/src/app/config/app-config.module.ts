import { NgModule, InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export class AppConfig {
  ENDPOINT: string;
  //ENDPOINT2: string;
}

export const APP_DI_CONFIG: AppConfig = {
  //ENDPOINT: "http://10.10.8.113"
  //ENDPOINT: "http://localhost:8484"
  ENDPOINT: ""
};

@NgModule({
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG
    }
  ]
})
export class AppConfigModule {}
