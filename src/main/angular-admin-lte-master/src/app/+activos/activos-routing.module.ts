import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ActivosComponent } from "./activos.component";

const routes: Routes = [
  {
    path: "",
    component: ActivosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivosRoutingModule {}
