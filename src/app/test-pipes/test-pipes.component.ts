import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent{

  //Criar uma variável chamada endereço e vai ser do tipo object{}
  endereco: object = {
    //dentro do objeto vou definir valores
    rua: 'Coronel Gustavo',
    numero: 265,
    bairro:'Tatuapé',
    cidade: 'São Paulo',
  };

  //Criar mais umas variáveis:

  valorDolar: number = 5.05;
  data = new Date();
  inflacao: number = 0.03;
  valorDecimal: number = 0.55431;
  nome: string = 'Lucas';

}
