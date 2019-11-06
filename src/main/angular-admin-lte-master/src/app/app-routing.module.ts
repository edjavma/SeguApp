import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Inicio"
    },
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "clasificacion",
        loadChildren:
          "./+clasificacion/clasificacion.module#ClasificacionModule",
        data: {
          title: "Clasificacion"
        }
      },
      {
        path: "activos",
        loadChildren: "./+activos/activos.module#ActivosModule",
        data: {
          title: "Activos"
        }
      },
      {
        path: "capas",
        loadChildren: "./+capas/capas.module#CapasModule",
        data: {
          title: "Capas de Riesgo"
        }
      },
      {
        path: "soluciones",
        loadChildren: "./+solucion/solucion.module#SolucionModule",
        data: {
          title: "Soluciones"
        }
      },
      {
        path: "accordion",
        loadChildren: "./+accordion/accordion.module#AccordionModule",
        data: {
          title: "Tipo de Tratamiento"
        }
      },
      {
        path: "alert",
        loadChildren: "./+alert/alert.module#AlertModule",
        data: {
          title: "Generador de Riesgo"
        }
      },
      {
        path: "dashboard",
        data: {
          title: "Dashboard"
        },
        children: [
          {
            path: "tipo",
            loadChildren: "./+dashboard/tipo/tipo.module#TipoModule",
            data: {
              title: "Tipo Riesgo"
            }
          },
          {
            path: "mapa",
            loadChildren: "./+dashboard/mapa/mapa.module#MapaModule",
            data: {
              title: "Mapa Riesgo"
            }
          }
        ]
      },
      {
        path: "layout",
        data: {
          title: "Analisis"
        },
        children: [
          {
            path: "configuration",
            loadChildren:
              "./+layout/configuration/configuration.module#ConfigurationModule",
            data: {
              title: "Riesgo"
            }
          },
          {
            path: "custom",
            loadChildren: "./+layout/custom/custom.module#CustomModule",
            data: {
              title: "Evaluacion de riesgos"
              // disableLayout: true
            }
          },
          {
            path: "header",
            loadChildren: "./+layout/header/header.module#HeaderModule",
            data: {
              title: "Tratamiento"
            }
          },
          {
            path: "sidebar-left",
            loadChildren:
              "./+layout/sidebar-left/sidebar-left.module#SidebarLeftModule",
            data: {
              title: "Sidebar Left"
            }
          },
          {
            path: "sidebar-right",
            loadChildren:
              "./+layout/sidebar-right/sidebar-right.module#SidebarRightModule",
            data: {
              title: "Sidebar Right"
            }
          }
        ]
      },
      {
        path: "boxs",
        data: {
          title: "Responsable"
        },
        children: [
          {
            path: "box",
            loadChildren:
              "./+boxs/box-default/box-default.module#BoxDefaultModule",
            data: {
              title: "info"
            }
          },
          {
            path: "info-box",
            loadChildren: "./+boxs/box-info/box-info.module#BoxInfoModule",
            data: {
              title: "Info Box"
            }
          },
          {
            path: "small-box",
            loadChildren: "./+boxs/box-small/box-small.module#BoxSmallModule",
            data: {
              title: "Small Box"
            }
          }
        ]
      },
      {
        path: "dropdown",
        loadChildren: "./+dropdown/dropdown.module#DropdownModule",
        data: {
          title: "Tipo de Brecha"
        }
      },
      {
        path: "tabs",
        loadChildren: "./+tabs/tabs.module#TabsModule",
        data: {
          title: "Tipo de Riesgo"
        }
      }
    ]
  },
  {
    path: "form",
    data: {
      title: "Form"
    },
    children: [
      {
        path: "input-text",
        loadChildren: "./+form/input-text/input-text.module#InputTextModule",
        data: {
          title: "Tipo de Impacto"
        }
      }
    ]
  },
  {
    path: "login",
    loadChildren: "./+login/login.module#LoginModule",
    data: {
      customLayout: true
    }
  },
  {
    path: "register",
    loadChildren: "./+register/register.module#RegisterModule",
    data: {
      customLayout: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
