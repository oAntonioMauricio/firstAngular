import {Component, Input} from '@angular/core';
import autores from "src/data/dados_livraria/autores";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent {

  autores = autores;

  @Input() nome?: string;
  @Input() livros?: number;
}
