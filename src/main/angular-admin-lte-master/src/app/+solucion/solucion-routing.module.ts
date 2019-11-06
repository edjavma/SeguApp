import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SolucionComponent } from "./solucion.component";

const routes: Routes = [
  {
    path: "",
    component: SolucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolucionRoutingModule {}
