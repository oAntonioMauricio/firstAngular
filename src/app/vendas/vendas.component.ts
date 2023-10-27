import {Component} from '@angular/core';
import vendas from "src/data/dados_livraria/vendas";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {

  vendas = vendas;
}
