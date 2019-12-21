import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { Tela2Module } from './components/tela2/tela2.module';
import { Tela1Module } from './components/tela1/tela1.module';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    MenuModule,
    Tela2Module,
    Tela1Module,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
