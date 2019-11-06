export const adminLteConf = {
  skin: "blue",
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    { label: "Menu Principal", separator: true },
    {
      label: "Inicio",
      route: "/",
      iconClasses: "fa fa-road",
      pullRights: [{ text: "New", classes: "label pull-right bg-green" }]
    },
    {
      label: "Dashboard",
      iconClasses: "fa fa-th-list",
      children: [
        { label: "Tipo de Riesgo", route: "dashboard/tipo" },
        { label: "Mapa de Riesgo", route: "dashboard/mapa" }
      ]
    },
    {
      label: "Analisis Riesgo",
      iconClasses: "fa fa-th-list",
      children: [
        { label: "Riesgo", route: "layout/configuration" },
        { label: "Tabla de Evaluacion", route: "layout/custom" },
        { label: "Tabla de Tratamiento", route: "layout/header" }
      ]
    },
    { label: "Componentes", separator: true },
    {
      label: "Tipo de tratamiento",
      route: "accordion",
      iconClasses: "fa fa-tasks"
    },
    {
      label: "Generador de Riesgo",
      route: "alert",
      iconClasses: "fa fa-exclamation-triangle"
    },
    {
      label: "Responsable",
      route: "boxs/box",
      iconClasses:
        "fa fa-files-o" /*,
      children: [
        { label: "Default Box", route: "boxs/box" },
        { label: "Info Box", route: "boxs/info-box" },
        { label: "Small Box", route: "boxs/small-box" }
      ]*/
    },
    {
      label: "Tipo de brecha",
      route: "dropdown",
      iconClasses: "fa fa-arrows-v"
    },
    {
      label: "Tipo de impacto",
      route: "form/input-text",
      iconClasses: "fa fa-files-o"
    },
    { label: "Tipo de Riesgo", route: "tabs", iconClasses: "fa fa-th" },
    {
      label: "Clasificacion",
      route: "clasificacion",
      iconClasses: "fa fa-tasks"
    },
    {
      label: "Activos",
      route: "activos",
      iconClasses: "fa fa-tasks"
    },
    {
      label: "Capas de Riesgo",
      route: "capas",
      iconClasses: "fa fa-tasks"
    },
    {
      label: "Soluciones",
      route: "soluciones",
      iconClasses: "fa fa-check"
    }
  ]
};
