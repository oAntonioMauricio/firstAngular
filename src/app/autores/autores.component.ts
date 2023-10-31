import {Component, Input} from '@angular/core';
import autores, {Autor} from "src/data/dados_livraria/autores";
import {AutoresService} from "../services/autores.service";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent {

  constructor(private autoresService: AutoresService) {
  }

  autores: Autor[] = [];

  @Input() nome?: string;
  @Input() livros?: number;

  ngOnInit(): void {
    this.autoresService.getAutores().subscribe((autores) => {
      console.log({"autores da API": autores})
      this.autores = autores;
    })
  }

}
