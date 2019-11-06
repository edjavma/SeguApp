import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TipoComponent } from "./tipo.component";

const routes: Routes = [
  {
    path: "",
    component: TipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRoutingModule {}
