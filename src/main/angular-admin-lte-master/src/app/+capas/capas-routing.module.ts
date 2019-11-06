import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CapasComponent } from "./capas.component";

const routes: Routes = [
  {
    path: "",
    component: CapasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapasRoutingModule {}
