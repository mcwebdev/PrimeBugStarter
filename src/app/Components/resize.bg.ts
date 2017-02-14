import {Component,OnInit} from '@angular/core';
import {Car} from './domain/car';
import {CarService} from './service/carservice';
let Linq = require('linqsharp/built/linqsharp').default;
@Component({
  templateUrl: 'resize.bg.html',
  selector: 'dt-bug'
})
export class DataTableColResizeDemo implements OnInit {
  static PROGRAMS_COLS: string = 'program-search-cols';
  private allColsPrograms: GridColumn[];
  public availableProgramCols: GridColumn[];
  public selectedProgramCols: GridColumn[];
  cars: Car[];

  constructor(private carService: CarService) {
    this.allColsPrograms = [
      new GridColumn('title', 'Title'),
      new GridColumn('network', 'Network'),
      new GridColumn('code', 'Code'),
      new GridColumn('status', 'Status'),
      new GridColumn('lengths', 'Run Time Duration'),
      new GridColumn('description', 'Description'),
      new GridColumn('categoryName', 'Show Category'),
      new GridColumn('genres', 'Show Genre'),
      new GridColumn('productionCompanies', 'Show Production Company'),
      new GridColumn('suppliers', 'Show Supplier')
    ];
    this.selectedProgramCols = [];
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
    this.availableProgramCols = new Linq(this.allColsPrograms).Where((n: GridColumn) => new Linq(this.selectedProgramCols)
      .Select((c: GridColumn) => c.field).ToArray().indexOf(n.field) === -1).ToArray();
  }
}
export class GridColumn {
  constructor(public field: string, public header: string) { }
}
