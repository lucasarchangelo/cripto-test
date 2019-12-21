import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TestesService } from 'src/app/shared/utils/testes.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    TestesService
  ]
})
export class HomeModule { }
