import {Component, Input} from '@angular/core';
import {Autor} from "src/data/dados_livraria/autores";
import {LivrosService} from "../services/livros.service";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent {

  autores: Autor[] = [];

  constructor(private livrosService: LivrosService) {
  }

  ngOnInit(): void {
    this.livrosService.getAutores().subscribe((autores) => {
      console.log({"autores da API": autores});
      this.autores = autores;
    })
  }

}
