import {Component} from '@angular/core';
import {Venda} from "src/data/dados_livraria/vendas";
import {LivrosService} from "../services/livros.service";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {

  constructor(private livrosService:LivrosService) {
  }

  ngOnInit(): void {
    this.livrosService.getVendas().subscribe((vendas) => {
      console.log({"vendas da API": vendas})
      this.vendas = vendas;
    })
  }

  // attributes
  vendas: Venda[] = [];

}
