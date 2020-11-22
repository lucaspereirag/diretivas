import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  lembretes: Array<string> = [];
  lembrete: string;

  sombra: string = '10px 10px gray';

  salvar(){
    this.lembretes = [this.lembrete, ... this.lembrete];
    this.lembrete = "";
  }
}
