import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule,PickListModule,SharedModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import{ DataTableColResizeDemo } from './components/resize.bg';
import {CarService} from './components/service/carservice';
import 'rxjs/add/operator/toPromise'
@NgModule({
  declarations: [
    AppComponent,
    DataTableColResizeDemo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    PickListModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
