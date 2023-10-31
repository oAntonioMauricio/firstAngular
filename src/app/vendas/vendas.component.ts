import {Component} from '@angular/core';
import {Venda} from "src/data/dados_livraria/vendas";
import {AutoresService} from "../services/autores.service";
import {VendasService} from "../services/vendas.service";

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {

  constructor(private vendasService: VendasService) {
  }

  ngOnInit(): void {
    this.vendasService.getVendas().subscribe((vendas) => {
      console.log({"vendas da API": vendas})
      this.vendas = vendas;
    })
  }

  // attributes
  vendas: Venda[] = [];


}
