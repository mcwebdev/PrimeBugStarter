"use strict";
var router_1 = require('@angular/router');
var setup_component_1 = require('./setup.component');
var homepage_component_1 = require('./homepage.component');
var theming_component_1 = require('./theming.component');
var inputtextdemo_1 = require('./demo/inputtext/inputtextdemo');
var buttondemo_1 = require('./demo/button/buttondemo');
var spinnerdemo_1 = require('./demo/spinner/spinnerdemo');
var paneldemo_1 = require('./demo/panel/paneldemo');
var fieldsetdemo_1 = require('./demo/fieldset/fieldsetdemo');
var ratingdemo_1 = require('./demo/rating/ratingdemo');
var passworddemo_1 = require('./demo/password/passworddemo');
var dialogdemo_1 = require('./demo/dialog/dialogdemo');
var togglebuttondemo_1 = require('./demo/togglebutton/togglebuttondemo');
var griddemo_1 = require('./demo/grid/griddemo');
var tabviewdemo_1 = require('./demo/tabview/tabviewdemo');
var radiobuttondemo_1 = require('./demo/radiobutton/radiobuttondemo');
var accordiondemo_1 = require('./demo/accordion/accordiondemo');
var inputtextareademo_1 = require('./demo/inputtextarea/inputtextareademo');
var galleriademo_1 = require('./demo/galleria/galleriademo');
var checkboxdemo_1 = require('./demo/checkbox/checkboxdemo');
var listboxdemo_1 = require('./demo/listbox/listboxdemo');
var messagesdemo_1 = require('./demo/messages/messagesdemo');
var growldemo_1 = require('./demo/growl/growldemo');
var carouseldemo_1 = require('./demo/carousel/carouseldemo');
var inputswitchdemo_1 = require('./demo/inputswitch/inputswitchdemo');
var selectbuttondemo_1 = require('./demo/selectbutton/selectbuttondemo');
var calendardemo_1 = require('./demo/calendar/calendardemo');
var dropdowndemo_1 = require('./demo/dropdown/dropdowndemo');
var progressbardemo_1 = require('./demo/progressbar/progressbardemo');
var chartdemo_1 = require('./demo/chart/chartdemo');
var piechartdemo_1 = require('./demo/chart/piechart/piechartdemo');
var doughnutchartdemo_1 = require('./demo/chart/doughnutchart/doughnutchartdemo');
var linechartdemo_1 = require('./demo/chart/linechart/linechartdemo');
var barchartdemo_1 = require('./demo/chart/barchart/barchartdemo');
var radarchartdemo_1 = require('./demo/chart/radarchart/radarchartdemo');
var polarareachartdemo_1 = require('./demo/chart/polarareachart/polarareachartdemo');
var menudemo_1 = require('./demo/menu/menudemo');
var tieredmenudemo_1 = require('./demo/tieredmenu/tieredmenudemo');
var menubardemo_1 = require('./demo/menubar/menubardemo');
var slidemenudemo_1 = require('./demo/slidemenu/slidemenudemo');
var breadcrumbdemo_1 = require('./demo/breadcrumb/breadcrumbdemo');
var sliderdemo_1 = require("./demo/slider/sliderdemo");
var lightboxdemo_1 = require("./demo/lightbox/lightboxdemo");
var paginatordemo_1 = require("./demo/paginator/paginatordemo");
var megamenudemo_1 = require("./demo/megamenu/megamenudemo");
var panelmenudemo_1 = require("./demo/panelmenu/panelmenudemo");
var datatabledemo_1 = require("./demo/datatable/datatabledemo");
var datatableeditabledemo_1 = require("./demo/datatable/datatableeditabledemo");
var datatablefacetsdemo_1 = require("./demo/datatable/datatablefacetsdemo");
var datatablepaginatordemo_1 = require("./demo/datatable/datatablepaginatordemo");
var datatablesortdemo_1 = require("./demo/datatable/datatablesortdemo");
var datatableresponsivedemo_1 = require("./demo/datatable/datatableresponsivedemo");
var datatableselectiondemo_1 = require("./demo/datatable/datatableselectiondemo");
var datatablefilterdemo_1 = require("./demo/datatable/datatablefilterdemo");
var datatablecolresizedemo_1 = require("./demo/datatable/datatablecolresizedemo");
var datatablecolreorderdemo_1 = require("./demo/datatable/datatablecolreorderdemo");
var datatablescrolldemo_1 = require("./demo/datatable/datatablescrolldemo");
var datatablegroupdemo_1 = require("./demo/datatable/datatablegroupdemo");
var datatablecruddemo_1 = require("./demo/datatable/datatablecruddemo");
var datatablelazydemo_1 = require("./demo/datatable/datatablelazydemo");
var datatabletemplatingdemo_1 = require("./demo/datatable/datatabletemplatingdemo");
var datatablecmdemo_1 = require("./demo/datatable/datatablecmdemo");
var datatablecoltogglerdemo_1 = require("./demo/datatable/datatablecoltogglerdemo");
var datatablerowexpansiondemo_1 = require("./demo/datatable/datatablerowexpansiondemo");
var codehighlighterdemo_1 = require("./demo/codehighlighter/codehighlighterdemo");
var orderlistdemo_1 = require("./demo/orderlist/orderlistdemo");
var picklistdemo_1 = require("./demo/picklist/picklistdemo");
var scheduledemo_1 = require("./demo/schedule/scheduledemo");
var datagriddemo_1 = require("./demo/datagrid/datagriddemo");
var datalistdemo_1 = require("./demo/datalist/datalistdemo");
var datascrollerdemo_1 = require("./demo/datascroller/datascrollerdemo");
var datascrollerinlinedemo_1 = require("./demo/datascroller/datascrollerinlinedemo");
var datascrollerloaderdemo_1 = require("./demo/datascroller/datascrollerloaderdemo");
var datascrollerinfinitedemo_1 = require("./demo/datascroller/datascrollerinfinitedemo");
var treedemo_1 = require("./demo/tree/treedemo");
var treetabledemo_1 = require("./demo/treetable/treetabledemo");
var terminaldemo_1 = require("./demo/terminal/terminaldemo");
var splitbuttondemo_1 = require("./demo/splitbutton/splitbuttondemo");
var overlaypaneldemo_1 = require("./demo/overlaypanel/overlaypaneldemo");
var autocompletedemo_1 = require("./demo/autocomplete/autocompletedemo");
var editordemo_1 = require("./demo/editor/editordemo");
var responsivedemo_1 = require("./demo/responsive/responsivedemo");
var multiselectdemo_1 = require("./demo/multiselect/multiselectdemo");
var gmapdemo_1 = require("./demo/gmap/gmapdemo");
var contextmenudemo_1 = require("./demo/contextmenu/contextmenudemo");
var dragdropdemo_1 = require("./demo/dragdrop/dragdropdemo");
var toolbardemo_1 = require("./demo/toolbar/toolbardemo");
var validationdemo_1 = require("./demo/validation/validationdemo");
var datatableexportdemo_1 = require("./demo/datatable/datatableexportdemo");
var tabmenudemo_1 = require("./demo/tabmenu/tabmenudemo");
var tooltipdemo_1 = require("./demo/tooltip/tooltipdemo");
var menumodelapi_1 = require("./demo/menumodel/menumodelapi");
var inputmaskdemo_1 = require("./demo/inputmask/inputmaskdemo");
exports.routes = [
    { path: '/', component: homepage_component_1.HomePageComponent },
    { path: '/setup', component: setup_component_1.SetupComponent },
    { path: '/theming', component: theming_component_1.ThemingComponent },
    { path: '/inputtext', component: inputtextdemo_1.InputTextDemo },
    { path: '/button', component: buttondemo_1.ButtonDemo },
    { path: '/spinner', component: spinnerdemo_1.SpinnerDemo },
    { path: '/panel', component: paneldemo_1.PanelDemo },
    { path: '/fieldset', component: fieldsetdemo_1.FieldsetDemo },
    { path: '/rating', component: ratingdemo_1.RatingDemo },
    { path: '/password', component: passworddemo_1.PasswordDemo },
    { path: '/dialog', component: dialogdemo_1.DialogDemo },
    { path: '/togglebutton', component: togglebuttondemo_1.ToggleButtonDemo },
    { path: '/grid', component: griddemo_1.GridDemo },
    { path: '/tabview', component: tabviewdemo_1.TabViewDemo },
    { path: '/radiobutton', component: radiobuttondemo_1.RadioButtonDemo },
    { path: '/accordion', component: accordiondemo_1.AccordionDemo },
    { path: '/inputtextarea', component: inputtextareademo_1.InputTextareaDemo },
    { path: '/galleria', component: galleriademo_1.GalleriaDemo },
    { path: '/checkbox', component: checkboxdemo_1.CheckboxDemo },
    { path: '/listbox', component: listboxdemo_1.ListboxDemo },
    { path: '/messages', component: messagesdemo_1.MessagesDemo },
    { path: '/growl', component: growldemo_1.GrowlDemo },
    { path: '/carousel', component: carouseldemo_1.CarouselDemo },
    { path: '/inputswitch', component: inputswitchdemo_1.InputSwitchDemo },
    { path: '/selectbutton', component: selectbuttondemo_1.SelectButtonDemo },
    { path: '/calendar', component: calendardemo_1.CalendarDemo },
    { path: '/dropdown', component: dropdowndemo_1.DropdownDemo },
    { path: '/progressbar', component: progressbardemo_1.ProgressBarDemo },
    { path: '/chart', component: chartdemo_1.ChartDemo },
    { path: '/piechart', component: piechartdemo_1.PieChartDemo },
    { path: '/doughnutchart', component: doughnutchartdemo_1.DoughnutChartDemo },
    { path: '/linechart', component: linechartdemo_1.LineChartDemo },
    { path: '/barchart', component: barchartdemo_1.BarChartDemo },
    { path: '/radarchart', component: radarchartdemo_1.RadarChartDemo },
    { path: '/polarareachart', component: polarareachartdemo_1.PolarAreaChartDemo },
    { path: '/menu', component: menudemo_1.MenuDemo },
    { path: '/tieredmenu', component: tieredmenudemo_1.TieredMenuDemo },
    { path: '/menubar', component: menubardemo_1.MenubarDemo },
    { path: '/slidemenu', component: slidemenudemo_1.SlideMenuDemo },
    { path: '/breadcrumb', component: breadcrumbdemo_1.BreadcrumbDemo },
    { path: '/slider', component: sliderdemo_1.SliderDemo },
    { path: '/lightbox', component: lightboxdemo_1.LightboxDemo },
    { path: '/paginator', component: paginatordemo_1.PaginatorDemo },
    { path: '/megamenu', component: megamenudemo_1.MegaMenuDemo },
    { path: '/panelmenu', component: panelmenudemo_1.PanelMenuDemo },
    { path: '/datatable', component: datatabledemo_1.DataTableDemo },
    { path: '/datatablefacets', component: datatablefacetsdemo_1.DataTableFacetsDemo },
    { path: '/datatablepaginator', component: datatablepaginatordemo_1.DataTablePaginatorDemo },
    { path: '/datatablesort', component: datatablesortdemo_1.DataTableSortDemo },
    { path: '/datatableresponsive', component: datatableresponsivedemo_1.DataTableResponsiveDemo },
    { path: '/datatableselection', component: datatableselectiondemo_1.DataTableSelectionDemo },
    { path: '/datatablefilter', component: datatablefilterdemo_1.DataTableFilterDemo },
    { path: '/datatableeditable', component: datatableeditabledemo_1.DataTableEditableDemo },
    { path: '/datatablecolresize', component: datatablecolresizedemo_1.DataTableColResizeDemo },
    { path: '/datatablecolreorder', component: datatablecolreorderdemo_1.DataTableColReorderDemo },
    { path: '/datatablescroll', component: datatablescrolldemo_1.DataTableScrollDemo },
    { path: '/datatablegroup', component: datatablegroupdemo_1.DataTableGroupDemo },
    { path: '/datatablelazy', component: datatablelazydemo_1.DataTableLazyDemo },
    { path: '/datatablecrud', component: datatablecruddemo_1.DataTableCrudDemo },
    { path: '/datatabletemplating', component: datatabletemplatingdemo_1.DataTableTemplatingDemo },
    { path: '/datatablecontextmenu', component: datatablecmdemo_1.DataTableCMDemo },
    { path: '/datatablecoltoggler', component: datatablecoltogglerdemo_1.DataTableColTogglerDemo },
    { path: '/datatablerowexpansion', component: datatablerowexpansiondemo_1.DataTableRowExpansionDemo },
    { path: '/codehighlighter', component: codehighlighterdemo_1.CodeHighlighterDemo },
    { path: '/orderlist', component: orderlistdemo_1.OrderListDemo },
    { path: '/picklist', component: picklistdemo_1.PickListDemo },
    { path: '/schedule', component: scheduledemo_1.ScheduleDemo },
    { path: '/datagrid', component: datagriddemo_1.DataGridDemo },
    { path: '/datalist', component: datalistdemo_1.DataListDemo },
    { path: '/datascroller', component: datascrollerdemo_1.DataScrollerDemo },
    { path: '/datascrollerinline', component: datascrollerinlinedemo_1.DataScrollerInlineDemo },
    { path: '/datascrollerloader', component: datascrollerloaderdemo_1.DataScrollerLoaderDemo },
    { path: '/datascrollerinfinite', component: datascrollerinfinitedemo_1.DataScrollerInfiniteDemo },
    { path: '/tree', component: treedemo_1.TreeDemo },
    { path: '/treetable', component: treetabledemo_1.TreeTableDemo },
    { path: '/terminal', component: terminaldemo_1.TerminalDemo },
    { path: '/splitbutton', component: splitbuttondemo_1.SplitButtonDemo },
    { path: '/overlaypanel', component: overlaypaneldemo_1.OverlayPanelDemo },
    { path: '/autocomplete', component: autocompletedemo_1.AutoCompleteDemo },
    { path: '/editor', component: editordemo_1.EditorDemo },
    { path: '/responsive', component: responsivedemo_1.ResponsiveDemo },
    { path: '/multiselect', component: multiselectdemo_1.MultiSelectDemo },
    { path: '/gmap', component: gmapdemo_1.GMapDemo },
    { path: '/contextmenu', component: contextmenudemo_1.ContextMenuDemo },
    { path: '/dragdrop', component: dragdropdemo_1.DragDropDemo },
    { path: '/toolbar', component: toolbardemo_1.ToolbarDemo },
    { path: '/validation', component: validationdemo_1.ValidationDemo },
    { path: '/datatableexport', component: datatableexportdemo_1.DataTableExportDemo },
    { path: '/tabmenu', component: tabmenudemo_1.TabMenuDemo },
    { path: '/tooltip', component: tooltipdemo_1.TooltipDemo },
    { path: '/menumodel', component: menumodelapi_1.MenuModelApi },
    { path: '/mask', component: inputmaskdemo_1.InputMaskDemo }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map