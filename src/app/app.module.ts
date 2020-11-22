import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SombraNaTabelaDirective } from './sombra-na-tabela.directive';
import { TestPipesComponent } from './test-pipes/test-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SombraNaTabelaDirective,
    TestPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
